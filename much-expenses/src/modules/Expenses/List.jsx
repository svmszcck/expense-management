import React from 'react';
import { compose, withStateHandlers } from 'recompose'


import Expense from './Item'

import withFiniteStateMachine from '../../components/StateMachine/fsm.hoc'

import { StyledList } from './styles';
import { assign } from 'xstate';

const Expenses = ({
  machineState,
  data,
  send
}) => {
  switch (machineState) {
    case 'fetching':
      return <span>FETCHING DATA....</span>
    case 'show':
      return <StyledList>
        <div>The total is {data.total}</div>
        {
          data.expenses.map(expense => <Expense key={expense.id} {...expense} onUpdate={send} />)
        }
      </StyledList>

    default:
      return <span>SOMETHING WENT WRONG</span>
  }
}


const expensesMachine = props => ({
  id: 'expenses',
  initial: 'start',
  context: {},
  states: {
    start: {
      on: {
        '': [
          { target: 'fetching' }
        ]
      }
    },
    fetching: {
      invoke: {
        id: 'fetchExpenses',
        src: (ctx, evt) => {
          console.log('on fetch expenses', ctx, evt)
          return fetch(`http://localhost:3030/expenses`).then(res => res.json())
        },
        onDone: {
          target: 'show',
          actions: assign({ data: (ctx, evt) => evt.data })
        },
        onError: {
          target: 'error',
          actions: ['logError']
        }
      }
    },
    show: {
      on: {
        REFRESH: 'fetching'
      }
    },
    error: {}
  }
})

const expensesActions = props => ({
  logError: console.error
})

export default compose(
  withStateHandlers({ data: {} }, {
    updateData: () => newData => ({ data: newData })
  }),
  withFiniteStateMachine(expensesMachine, expensesActions)
)(Expenses);

