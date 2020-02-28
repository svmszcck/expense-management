import React, { useEffect } from 'react';
import Expense from '../expense';
import Spinner from '../spinner'
import './index.scss';

export default ({ expenses = [], selectedExpenseId, fetchExpenses, selectExpense, isLoading }) => {
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
          <Expense
            as='li'
            key={expense.id}
            {...expense}
            selected={ selectedExpenseId === expense.id }
            onClick={() => selectExpense(expense.id)} 
          />
        )
      }
    </ul>
  );
}