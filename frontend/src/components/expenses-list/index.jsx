import React from 'react';
import Expense from '../expense';
import './index.scss';

export default ({ expenses = [] }) => {
  return (
    <ul className='expenses-list'>
      {
        expenses.map(expense =>
          <Expense key={expense.id} {...expense} as='li' />
        )
      }
    </ul>
  );
}