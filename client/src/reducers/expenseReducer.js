import { EXPENSES_LOADING, GET_EXPENSES, GET_EXPENSE } from '../actions/types';

const initialState = {
  expenses: null,
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EXPENSES_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_EXPENSES:
      return {
        ...state,
        expenses: action.payload,
        loading: false
      };
    case GET_EXPENSE:
      let { expenses } = state.expenses;
      for (let i = 0; i < expenses.length; i++) {
        if (expenses[i].id === action.payload.id) {
          expenses[i] = action.payload;
        }
      }
      return {
        ...state
      };
    default:
      return state;
  }
};
