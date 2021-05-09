import {
  getExpenses as getExpensesService,
  getExpense as getExpenseService,
  updateExpense as updateExpenseService,
  uploadReceipt as uploadReceiptService
} from 'services/expenseService';
import { ExpensePayload } from 'types';
import { UPDATE_EXPENSE, SET_EXPENSE_LIST, SET_EXPENSE, SET_EXPENSE_STATUS } from '../constants';
import { SUCCESS, ERROR } from 'constants/ui';

export const fetchExpenses = ({ limit, offset }: ExpensePayload) => async (dispatch: any) => {
  const expenses = await getExpensesService(limit, offset);

  dispatch({ type: SET_EXPENSE_LIST, payload: { list: expenses } });
}

export const fetchExpense = (id: string) => async (dispatch: any) => {
  const expense = await getExpenseService(id);

  dispatch({ type: SET_EXPENSE, payload: { data: expense } });
}

export const updateExpense = (id: string, comment: string) => async (dispatch: any) => {
  const result = await updateExpenseService(id, comment);

  if (result) dispatch(updateExpenseStatus(SUCCESS));
}

export const uploadReceipt = (id: string, receipt: File) => async (dispatch: any) => {
  const result = await uploadReceiptService(id, receipt);

  if (result) dispatch(updateExpenseStatus(SUCCESS));
}

export const updateExpenseStatus = (updateStatus: string) => async (dispatch: any) => {
  dispatch({ type: SET_EXPENSE_STATUS, payload: { updateStatus } });
}
