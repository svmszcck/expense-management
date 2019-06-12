import React from 'react';


import Comment from './Comment'

import withFiniteStateMachine from '../../components/StateMachine/fsm.hoc'
import Gallery from '../../components/Gallery'
import Uploader from '../../components/Upload'


import {
  StyledItem,
  StyledInfo,
  KeyValueStyling,
} from './styles';
import FlexContainer from '../../components/Flex/Container'
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
  machineState,
  collapsed,
  send,
  onUpdate
}) =>
  <StyledItem direction="column" across="stretch" along="space-between">
    <StyledInfo direction="column" across="stretch" along="stretch">
      <FlexContainer direction="row" along="space-between" across="start">
        <FlexContainer direction="column" across="start">
          <KeyValueStyling><span>User:</span> {user.first} {user.last}</KeyValueStyling>
          <KeyValueStyling><span>Amount:</span> {amount.value} {amount.currency}</KeyValueStyling>
          <KeyValueStyling><span>Merchant:</span> {merchant}</KeyValueStyling>

        </FlexContainer>
        <FlexContainer direction="column" across="flex-end" >
          <Uploader onSubmit={send} />
        
        </FlexContainer>
      </FlexContainer>

      <hr />
      <Comment id={id} content={comment} onUpdate={onUpdate} ></Comment>
    </StyledInfo>
    <Gallery collapsed={collapsed}  items={receipts} toggle={send} message="Show uploaded receipts">
      { (props, index) => <img alt={props.url} src={`http://localhost:3030${props.url}`} height="100" /> }
    </Gallery>
  </StyledItem>




const expenseActions = props => ({
  updateHandler: () => props.onUpdate('REFRESH'),
  logError: console.error
})

const expenseMachine = props => ({
  id: `expense-${props.id}`,
  initial: 'display',
  states: {
    display: {
      initial: 'collapsed',
      on: {
        UPLOAD: 'uploading',
      },
      states: {
        opened: {
          on: {
            CLOSE: {
              target: 'collapsed',
              actions: assign({ collapsed: () => true })
            }
          }
        },
        collapsed: {
          on: {
            OPEN: {
              target: 'opened',
              actions: assign({ collapsed: () => false })
            }
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
          data.set('receipt', evt.file, 'receipt')

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

export default withFiniteStateMachine(
  expenseMachine, 
  expenseActions, 
  {
    collapsed: true,
    files: []
  }
)(Expense)



