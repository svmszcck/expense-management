import { EXPENSES_LOADING, GET_EXPENSES } from '../actions/types';

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
    default:
      return state;
  }
};
