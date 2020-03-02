export const FETCH_EXPENSES = "FETCH_EXPENSES";
export const EXPENSES_FETCHED = "EXPENSES_FETCHED";
export const EXPENSES_FETCHING = "EXPENSES_FETCHING";
export const EXPENSE_SELECTED = "EXPENSE_SELECTED";
export const POST_COMMENT = "POST_COMMENT";
export const COMMENT_POSTING = "COMMENT_POSTING";
export const COMMENT_POSTED = "COMMENT_POSTED";

export const fetchExpenses = (offset = 0) => ({ type: FETCH_EXPENSES, payload: { offset }});
export const selectExpense = (id = null) => ({ type: EXPENSE_SELECTED, payload: id});
export const postComment = ({ id, comment }) => ({ type: POST_COMMENT, payload: { id, comment }});
