import { combineReducers } from "redux";

import expenseReducer from "./expense";

export default combineReducers({
  expense: expenseReducer,
});
