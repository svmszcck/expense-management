import {
  FETCH_EXPENSES_REQUEST,
  FETCH_EXPENSES_ERROR,
  FETCH_EXPENSES_SUCCESS,
  RESET_CURRENT_EXPENSE,
  SET_CURRENT_EXPENSE,
  UPDATE_EXPANSE
} from "./actions";

export const initialState = {
  expenses: [],
  loading: false,
  error: null,
  loaded: false,
  total: 0,
  currentExpenseId: null
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_EXPENSES_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_EXPENSES_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case FETCH_EXPENSES_SUCCESS:
      return {
        ...state,
        expenses: [...state.expenses, ...payload.expenses],
        total: payload.total,
        loaded: true,
        error: null,
        loading: false
      };
    case SET_CURRENT_EXPENSE:
      return {
        ...state,
        currentExpenseId: payload
      };
    case RESET_CURRENT_EXPENSE:
      return {
        ...state,
        currentExpenseId: null
      };
    case UPDATE_EXPANSE:
      return {
        ...state,
        expenses: state.expenses.map(expense => (expense.id === payload.id ? payload : expense))
      };

    default:
      return state;
  }
};

export default reducer;
