import { LIST_EXPENSES, SET_PAGE } from '../../mutation-types';

export default {
  [LIST_EXPENSES]: (state, expenses) => {
    state.expenses = expenses;
  },
  [SET_PAGE]: (state, page) => {
    state.page = page;
  },
};
