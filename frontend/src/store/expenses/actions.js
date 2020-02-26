export const FETCH_EXPENSES = "FETCH_EXPENSES";
export const EXPENSES_FETCHED = "EXPENSES_FETCHED";
export const EXPENSES_FETCHING = "EXPENSES_FETCHING";

export const fetchExpenses = (offset = 0) => ({ type: FETCH_EXPENSES, payload: { offset }});
