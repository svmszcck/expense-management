import ExpensesService from '@/api/expenses';
import { LIST_EXPENSES, SET_PAGE, SET_EXPENSE } from '../../mutation-types';

export default {
  getExpenses: ({ commit }, options) => {
    const { search, page } = options;

    // get state.expenses and state.page
    // check page is not higher than state.page
    // if not, no api call
    // if yeah, then api call
    // and append new items to state.expenses
    // other way is amount of items.
    // currentExpenses = state.expenses;
    // currentPage = state.page;

    ExpensesService.getExpenses(page).then(({ data }) => {
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
      commit(SET_PAGE, page);
    });
  },
  setExpense: ({ commit, getters }, id) => {
    const expense = id ? getters.expenses.filter(item => item.id === id)[0] : getters.expenses[0];
    commit(SET_EXPENSE, expense);
  },
};
