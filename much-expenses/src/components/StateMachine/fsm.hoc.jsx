import React from 'react';
import {
  compose,
  withStateHandlers,
  lifecycle,
  withProps
} from 'recompose'

import { Machine } from 'xstate'
import { interpret } from 'xstate/lib/interpreter' 


const withFiniteStateMachine = (machine, actions, context = {}) => BaseComponent => outerProps => {

  const m =
    Machine(
      machine(outerProps),
      { actions: actions(outerProps) }
    ).withContext(context)

  const interpreter = interpret(m)


  const MachineComponent = compose(
    withStateHandlers({ componentState: m.initialState.value }, {
      update: () => newState => newState
    }),
    withProps({ send: interpreter.send }),
    lifecycle({
      componentDidMount() {
        interpreter
          .onTransition(state => {
            console.log('going to', outerProps.id, m.id, state.value)
            this.props.update({ machineState: state.value, ...state.context })
          }).start()
      }
    })
  )(BaseComponent)

  return <MachineComponent {...outerProps} />
}

export default withFiniteStateMachine