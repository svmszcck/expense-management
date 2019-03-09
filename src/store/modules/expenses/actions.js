import ExpensesService from '@/api/expenses';
import { LIST_EXPENSES } from '../../mutation-types';

export default {
  getExpenses: ({ commit }) => {
    ExpensesService.getExpenses().then(({ data }) => {
      commit(LIST_EXPENSES, data.expenses);
    });
  },
  // getExpense: ({ commit }, expenseId) => {
  //   ExpensesService.getExpense(expenseId).then(({ data }) => {
  //     commit(EXPENSE_DETAIL, data.expenses);
  //   });
  // },
};
