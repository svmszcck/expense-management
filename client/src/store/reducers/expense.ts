import { Action } from 'types';
import { SET_EXPENSE, SET_EXPENSE_LIST, UPDATE_EXPENSE, SET_EXPENSE_STATUS, SET_EXPENSE_OFFSET } from "../constants";

const initialState = { list: [], data: {}, updateStatus: null, offset: 0 };

const expenseReducer = (state = initialState, { type, payload }: Action) => {
  switch (type) {
    case SET_EXPENSE_LIST:
      return { ...state, list: [...state.list, ...payload.list] };
    case SET_EXPENSE:
      return { ...state, ...payload };
    case UPDATE_EXPENSE:
      return { ...state, ...payload };
    case SET_EXPENSE_STATUS:
      return { ...state, ...payload };
    case SET_EXPENSE_OFFSET:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default expenseReducer;
