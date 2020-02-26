import React, { useEffect } from 'react';
import Expense from '../expense';
import './index.scss';

export default ({ expenses = [], fetchExpenses }) => {
  useEffect(() => {
    fetchExpenses();
  }, [fetchExpenses]);
  
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