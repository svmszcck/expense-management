import {
  EXPENSES_FETCHED,
  EXPENSES_FETCHING,
  EXPENSE_SELECTED
} from './actions';

const initialState = {
  expenses: [],
  selectedExpenseId: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case EXPENSES_FETCHED:
      return {
        ...state,
        expenses: [...state.expenses, ...payload.expenses],
        total: payload.total,
        isFetching: false
      };
    case EXPENSES_FETCHING: {
      return {
        ...state,
        isFetching: payload
      };
    }
    case EXPENSE_SELECTED: {
      return {
        ...state,
        selectedExpenseId: payload
      };
    }
    default:
      return state;
  }
};
