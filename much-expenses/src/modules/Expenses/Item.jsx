import React from 'react';


import Comment from './Comment'

import withFiniteStateMachine from '../../components/StateMachine/fsm.hoc'
import Gallery from '../../components/Gallery'


import { StyledItem } from './styles';
import { assign } from 'xstate';

const Expense = ({
  id,
  amount,
  date,
  merchant,
  receipts,
  comment,
  category,
  user,
  index,
  submitReceipt,
  componentState,
  files,
  send,
  onUpdate
}) =>
  <StyledItem direction="column" across="start" along="center">
    <div>AMOUNT: {amount.value}{amount.currency}</div>
    <Gallery items={receipts}>
      { (props, index) => <img alt={props.url} src={`http://localhost:3030${props.url}`} height="100" /> }
    </Gallery>
  
    <Comment id={id} content={comment} onUpdate={onUpdate} ></Comment>
    <input name="receipt" type="file" onChange={evt => send('FILES.SELECTED', { files: evt.target.files })} />
    {
      files && files.length >= 0 ? <button onClick={evt => send('UPLOAD')}>Upload</button> : null
    }  
  </StyledItem>




const expenseActions = props => ({
  setFiles: assign({ files: (_, evt) => evt.files }),
  updateHandler: () => props.onUpdate('REFRESH'),
  logError: console.error
})

const expenseMachine = props => ({
  id: `expense-${props.id}`,
  initial: 'display',
  context: {
    collapsed: true,
    files: []
  },
  states: {
    display: {
      initial: 'collapsed',
      on: {
        UPLOAD: 'uploading',
        'FILES.SELECTED': {
          target: 'display',
          actions: ['setFiles']
        }
      },
      states: {
        opened: {
          on: {
            CLOSE: 'collapsed'
          }
        },
        collapsed: {
          on: {
            OPEN: 'opened'
          }
        },
      }
    },
    uploading: {
      invoke: {
        id: 'uploadReceipts',
        src: (ctx, evt) => {
          console.log('on uploadReceipts', ctx, evt)

          const data = new FormData()
          data.set('receipt', ctx.files[0], 'receipt')

          return fetch(`http://localhost:3030/expenses/${props.id}/receipts`, { // Your POST endpoint
            method: 'POST',
            body: data
          })
            .then(response => response.json()) // if the response is a JSON object     
            .then(console.log)
            .catch(console.error);
        },
        onDone: {
          target: 'display',
          actions: ['updateHandler']
        },
        onError: {
          target: 'display',
          actions: ['logError']
        }
      }
    }
  }

})

export default withFiniteStateMachine(expenseMachine, expenseActions)(Expense)



