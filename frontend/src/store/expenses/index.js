import {
  EXPENSES_FETCHED,
  EXPENSES_FETCHING,
  EXPENSE_SELECTED,
  COMMENT_POSTED,
  COMMENT_POSTING
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
    case COMMENT_POSTED: {
      const expenses = [...state.expenses].map(e => {
        if (e.id === payload.id) {
          return payload;
        }
        return e;
      });
      return {
        ...state,
        expenses,
        isPostingComment: false
      }
    }
    case COMMENT_POSTING: {
      return {
        ...state,
        isPostingComment: payload
      }
    }
    default:
      return state;
  }
};
