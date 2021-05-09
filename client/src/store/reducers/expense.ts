import { UPDATE_EXPENSE_LIST } from "../constants";

const initialState = { data: [] };

const expenseReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case UPDATE_EXPENSE_LIST:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default expenseReducer;
