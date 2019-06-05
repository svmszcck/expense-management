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
  index,
  onUpdate
}) =>
  <StyledItem direction="column" across="start" along="center">
    <div>AMOUNT: {amount.value}{amount.currency}</div>
    <Comment id={id} content={comment} onUpdate={onUpdate} ></Comment>
  </StyledItem>


export default Expense
