import React, { useEffect } from 'react';
import Expense from '../expense';
import ExpenseDetails from '../../containers/expense-details';
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
          <React.Fragment key={expense.id}>
            <Expense
              as='li'
              {...expense}
              selected={ selectedExpenseId === expense.id }
              onClick={() => selectExpense(selectedExpenseId === expense.id ? null : expense.id)} 
            />
            {
              selectedExpenseId === expense.id
              ? <ExpenseDetails className='expenses-list__expense-details' />
              : null }
          </React.Fragment>
        )
      }
    </ul>
  );
}