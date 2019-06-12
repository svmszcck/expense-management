import React from 'react';

import withFiniteStateMachine from '../../components/StateMachine/fsm.hoc'

import { 
  StyledComment, 
  StyledQuotation,
  StyledMessage,
  StyledEditingComment,
  StyledEditingActions
} from './styles'
import { withHandlers, compose } from 'recompose';

const Comment = ({
  content,
  machineState,
  send,
  setRef,
  getRef
}) => {

  let html

  switch (machineState) {
    case 'show': 
      const text = content === '' ? 'No comment yet. Click here to add one.' : content
      html = content === ''
        ? <StyledMessage onClick={() => send('EDIT')}>No comment yet. Click here to add one.</StyledMessage>
        : <StyledQuotation onClick={() => send('EDIT')}>{content}</StyledQuotation>
      break;
    case 'editing':
      html = (
        <StyledEditingComment direction="column" across="flex-end" >
          <textarea autoFocus defaultValue={content} ref={setRef}></textarea>
          <StyledEditingActions direction="row">
            <button onClick={() => send('CANCEL')}>Cancel</button>
            <button onClick={evt => send('SAVE', { data: getRef().value })}>
              Save
          </button>
          </StyledEditingActions>
        </StyledEditingComment>
      )
      break;
    case 'updating':
      return <span>UPDATING.......</span>
    default:
      return <span>not working</span>
  }

  return html
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
        src: (ctx, evt) => fetch(`http://localhost:3030/expenses/${props.id}`, {
          method: 'POST',
          body: JSON.stringify({ comment: evt.data }),
          headers: { 'Content-Type': 'application/json' }
        }),
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

export default compose(
  
  withFiniteStateMachine(
    commentMachine,
    props => ({
      updateHandler: (ctx, evt) => props.onUpdate('REFRESH'),
      logError: console.error
    })
  ),
  withHandlers(() => {
    let inputReference = null;

    return {
      setRef: () => ref => (inputReference = ref),
      getRef: () => () => inputReference
    }
  }),
)(Comment)



