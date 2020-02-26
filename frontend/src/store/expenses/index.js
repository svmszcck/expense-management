import { EXPENSES_FETCHED, EXPENSES_FETCHING } from './actions';

const initialState = {
  expenses: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case EXPENSES_FETCHED:
      return {
        ...state,
        expenses: [...state.expenses, ...payload.expenses],
        isFetching: false
      };
    case EXPENSES_FETCHING: {
      return {
        ...state,
        isFetching: payload
      };
    }
    default:
      return state;
  }
};
