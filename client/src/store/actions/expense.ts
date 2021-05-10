import {
  getExpenses as getExpensesService,
  getExpense as getExpenseService,
  updateExpense as updateExpenseService,
  uploadReceipt as uploadReceiptService
} from 'services/expenseService';
import { ExpensePayload } from 'types';
import { SET_EXPENSE_LIST, SET_EXPENSE, SET_EXPENSE_STATUS, SET_EXPENSE_OFFSET } from '../constants';
import { SUCCESS } from 'constants/ui';

export const fetchExpenses = ({ limit, offset }: ExpensePayload) => async (dispatch: any): Promise<any> => {
  const expenses = await getExpensesService(limit, offset);

  dispatch({ type: SET_EXPENSE_LIST, payload: { list: expenses } });
}

export const fetchExpense = (id: string) => async (dispatch: any): Promise<any> => {
  const expense = await getExpenseService(id);

  dispatch({ type: SET_EXPENSE, payload: { data: expense } });
}

export const updateExpense = (id: string, comment: string) => async (dispatch: any): Promise<any> => {
  const result = await updateExpenseService(id, comment);

  if (result) dispatch(updateExpenseStatus(SUCCESS));
}

export const setExpenseOffset = (offset: number) => (dispatch: any): void => {
  dispatch({ type: SET_EXPENSE_OFFSET, payload: { offset } });
}

export const uploadReceipt = (id: string, receipt: File) => async (dispatch: any): Promise<any> => {
  const result = await uploadReceiptService(id, receipt);

  if (result) dispatch(updateExpenseStatus(SUCCESS));
}

export const updateExpenseStatus = (updateStatus: string | null) => async (dispatch: any): Promise<any> => {
  dispatch({ type: SET_EXPENSE_STATUS, payload: { updateStatus } });
}
