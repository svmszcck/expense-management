import { getExpense, getExpenses } from 'services/expenseService';
import { ExpensePayload } from 'types';
import { UPDATE_EXPENSE, UPDATE_EXPENSE_LIST } from '../constants';

export const fetchExpenses = ({ limit, offset }: ExpensePayload) => async (dispatch: any) => {
  const expenses = await getExpenses(limit, offset);

  dispatch({ type: UPDATE_EXPENSE_LIST, payload: { list: expenses } });
}

export const fetchExpense = (id: string) => async (dispatch: any) => {
  const expense = await getExpense(id);

  dispatch({ type: UPDATE_EXPENSE, payload: { data: expense } });
}
