import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import expenseReducer from './expenseReducer';
import adminReducer from './adminReducer';

export default combineReducers({
  errors: errorReducer,
  expenses: expenseReducer,
  admin: adminReducer
});
