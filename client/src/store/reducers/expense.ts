import { UPDATE_EXPENSE, UPDATE_EXPENSE_LIST } from "../constants";

const initialState = { list: [], data: {} };

const expenseReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case UPDATE_EXPENSE_LIST:
      return { ...state, list: [...state.list, ...payload.list] };
    case UPDATE_EXPENSE:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default expenseReducer;
