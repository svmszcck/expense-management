import { getExpenses } from 'services/expenseService';
import { ExpensePayload } from 'types';
import { UPDATE_EXPENSE_LIST } from '../constants';

export const fetchExpenses = (payload: ExpensePayload) => async (dispatch: any) => {
  const expenses = await getExpenses(10, 1);

  dispatch({ type: UPDATE_EXPENSE_LIST, payload: { data: expenses } });
}

