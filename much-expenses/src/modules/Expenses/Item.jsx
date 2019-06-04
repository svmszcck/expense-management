import React from 'react';

import Comment from './Comment'

import { StyledItem } from './styles';

const Expense = ({
  id,
  amount,
  date,
  merchant,
  receipts,
  comment,
  category,
  user,
  index
}) =>
  <StyledItem direction="column" across="start" along="center">
    <div>AMOUNT: {amount.value}{amount.currency}</div>
    <Comment content={comment} onSave={ e => console.log('clicked save', e) } ></Comment>
  </StyledItem>

export default Expense
