import { createAction } from "../../helpers/common";

export const FETCH_EXPENSES = "FETCH_EXPENSES";
export const FETCH_EXPENSES_REQUEST = "FETCH_EXPENSES_REQUEST";
export const FETCH_EXPENSES_ERROR = "FETCH_EXPENSES_ERROR";
export const FETCH_EXPENSES_SUCCESS = "FETCH_EXPENSES_SUCCESS";

export const SET_CURRENT_EXPENSE = "SET_CURRENT_EXPENSE";
export const RESET_CURRENT_EXPENSE = "RESET_CURRENT_EXPENSE";
export const UPDATE_EXPANSE = "UPDATE_EXPANSE";

export const fetchExpenses = createAction(FETCH_EXPENSES);
export const fetchExpensesRequest = createAction(FETCH_EXPENSES_REQUEST);
export const fetchExpensesSuccess = data => createAction(FETCH_EXPENSES_SUCCESS)(data);
export const fetchExpensesError = error => createAction(FETCH_EXPENSES_ERROR)(error);

export const setExpenseId = createAction(SET_CURRENT_EXPENSE);
export const resetExpenseId = createAction(RESET_CURRENT_EXPENSE);
export const updateExpense = createAction(UPDATE_EXPANSE);
