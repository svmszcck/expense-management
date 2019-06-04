import React from 'react';
import { compose } from 'recompose'

import fetchFrom from '../../components/Fetcher/fetcher.hoc'
import Expense from './Item'

import { StyledList } from './styles';

const Expenses = ({ data }) =>
  <StyledList>
    <div>The total is {data.total}</div>
    {
      data.expenses.map(expense => <Expense key={ expense.id } {...expense } />)
    }
  </StyledList>

export default compose(
  fetchFrom('/expenses')
)(Expenses);
