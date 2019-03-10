import { LIST_EXPENSES, SET_PAGE, SET_EXPENSE } from '../../mutation-types';

export default {
  [LIST_EXPENSES]: (state, expenses) => {
    state.expenses = expenses;
  },
  [SET_PAGE]: (state, page) => {
    state.page = page;
  },
  [SET_EXPENSE]: (state, expense) => {
    state.expense = expense;
  },
};
