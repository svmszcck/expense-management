import { combineReducers } from "redux";
import expenses from "./expenses/reducer";

const rootReducer = combineReducers({
  expenses
});

export default rootReducer;
