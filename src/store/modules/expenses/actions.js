import ExpensesService from '@/api/expenses';
import { LIST_EXPENSES } from '../../mutation-types';

export default {
  getExpenses: ({ commit }) => {
    ExpensesService.getExpenses().then(({ data }) => {
      commit(LIST_EXPENSES, data.expenses);
    });
  },
};
