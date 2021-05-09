import { SET_EXPENSE, SET_EXPENSE_LIST, UPDATE_EXPENSE, SET_EXPENSE_STATUS } from "../constants";

const initialState = { list: [], data: {}, updateStatus: null };

const expenseReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case SET_EXPENSE_LIST:
      return { ...state, list: [...state.list, ...payload.list] };
    case SET_EXPENSE:
      return { ...state, ...payload };
    case UPDATE_EXPENSE:
      return { ...state, ...payload };
    case SET_EXPENSE_STATUS:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default expenseReducer;
