import React, { useEffect } from 'react';
import Expense from '../expense';
import Spinner from '../spinner'
import './index.scss';

export default ({ expenses = [], fetchExpenses, isLoading }) => {
  useEffect(() => {
    fetchExpenses();
  }, [fetchExpenses]);

  if (isLoading) {
    return <Spinner />;
  }
  
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