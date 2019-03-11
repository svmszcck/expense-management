import ExpensesService from '@/api/expenses';
import { LIST_EXPENSES, SEARCH_EXPENSES, SET_PAGE, SET_EXPENSE } from '../../mutation-types';

export default {
  getExpenses: ({ commit, getters }, page = 0) => {
    if (getters.searchExpenses.length > 0) {
      commit(LIST_EXPENSES, getters.searchExpenses);
    } else {
      ExpensesService.getExpenses(page).then(({ data }) => {
        commit(LIST_EXPENSES, data.expenses);
        commit(SET_PAGE, page);
      });
    }
  },

  searchExpenses: ({ commit, state }, search) => {
    const expenses = state.expenses.filter(
      item =>
        (item.user.first.toLowerCase().indexOf(search.toLowerCase()) &&
          item.user.last.toLowerCase().indexOf(search.toLowerCase()) &&
          item.amount.currency.toLowerCase().indexOf(search.toLowerCase()) &&
          item.merchant.toLowerCase().indexOf(search.toLowerCase()) &&
          item.comment.toLowerCase().indexOf(search.toLowerCase()) &&
          item.category.toLowerCase().indexOf(search.toLowerCase())) !== -1,
    );
    commit(SEARCH_EXPENSES, expenses);
  },

  setExpense: ({ commit, getters }, id) => {
    const expense = id ? getters.expenses.filter(item => item.id === id)[0] : getters.expenses[0];
    commit(SET_EXPENSE, expense);
  },

  setExpenseAfterUpload: ({ commit, dispatch }, expense) => {
    commit(SET_EXPENSE, expense);
    dispatch('getExpenses', { search: '', page: ' ' });
  },

  setComment: ({ commit, dispatch }, commentCreated) => {
    ExpensesService.setComment(commentCreated).then(({ data }) => {
      commit(SET_EXPENSE, data);
      dispatch('getExpenses', { search: '', page: ' ' });
    });
  },
};
