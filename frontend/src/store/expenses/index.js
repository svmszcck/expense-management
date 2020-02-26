import { EXPENSES_FETCHED } from './actions';

const initialState = {
  expenses: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case EXPENSES_FETCHED:
      return {
        ...state,
        expenses: [...state.expenses, ...payload.expenses]
      };
    default:
      return state;
  }
};
