import React from 'react';
import { compose } from 'recompose'

import fetchFrom from '../../components/Fetcher/fetcher.hoc'
import { StyledList, StyledItem } from './styles';

const Expenses = ({ data }) =>
  <StyledList>
    <div>The total is {data.total}</div>
    {
      data.expenses.map(expense => <StyledItem>{expense.id}</StyledItem>)
    }
  </StyledList>

export default compose(
  fetchFrom('/expenses')
)(Expenses);
