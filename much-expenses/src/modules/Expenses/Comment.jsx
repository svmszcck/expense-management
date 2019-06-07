import React from 'react';

import withFiniteStateMachine from '../../components/StateMachine/fsm.hoc'

const Comment = ({
  content,
  machineState,
  send
}) => {
  console.log('rendering Comment on state', machineState, 'with content', content)
  switch (machineState) {
    case 'show': 
      return <span onClick={() => send('EDIT')}>Comment: {content}</span>
    case 'editing':
      return (
        <div>
          <input defaultValue={content}></input>
          <button onClick={() => send('CANCEL') }>Cancel</button>
          <button onClick={evt => send('SAVE', { data: evt.target.parentElement.firstChild.value })}>
            Save
          </button>
        </div>
      )
    case 'updating':
      return <span>UPDATING.......</span>
    default:
      return <span>not working</span>
  }
}



const commentMachine = props => ({
  id: 'comment',
  initial: 'show',
  context: {},
  states: {
    show: {
      on: {
        EDIT: 'editing'
      }
    },
    editing: {
      on: {
        CANCEL: 'show',
        SAVE: 'updating'
      }
    },
    updating: {
      invoke: {
        id: 'saveComment',
        src: (ctx, evt) => {
          console.log('on SaveComment', ctx, evt)
          return fetch(`http://localhost:3030/expenses/${props.id}`, {
            method: 'POST',
            body: JSON.stringify({ comment: evt.data }),
            headers: { 'Content-Type': 'application/json' }
          })
        },
        onDone: {
          target: 'show',
          actions: ['updateHandler']
        },
        onError: {
          target: 'editing',
          actions: ['logError']
        }
      }
    }
  }
})

export default withFiniteStateMachine(
  commentMachine,
  props => ({
    updateHandler: (ctx, evt) =>  props.onUpdate('REFRESH'),
    logError: console.error
  })
)(Comment)



