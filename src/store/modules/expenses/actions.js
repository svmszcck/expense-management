import ExpensesService from '@/api/expenses';
import { LIST_EXPENSES } from '../../mutation-types';

export default {
  getExpenses: ({ commit }, search = null) => {
    ExpensesService.getExpenses().then(({ data }) => {
      // TODO: Refactor.
      const items = search
        ? data.expenses.filter(
            item =>
              (item.user.first.toLowerCase().indexOf(search.toLowerCase()) &&
                item.user.last.toLowerCase().indexOf(search.toLowerCase()) &&
                item.amount.currency.toLowerCase().indexOf(search.toLowerCase()) &&
                item.merchant.toLowerCase().indexOf(search.toLowerCase()) &&
                item.comment.toLowerCase().indexOf(search.toLowerCase()) &&
                item.category.toLowerCase().indexOf(search.toLowerCase())) !== -1,
          )
        : data.expenses;
      commit(LIST_EXPENSES, items);
    });
  },
};
