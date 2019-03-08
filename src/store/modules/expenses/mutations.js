import { LIST_EXPENSES } from '../../mutation-types';

export default {
  [LIST_EXPENSES]: (state, expenses) => {
    state.expenses = expenses;
  },
};
