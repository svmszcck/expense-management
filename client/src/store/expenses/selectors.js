import { createSelector } from "reselect";
import { selectSearch, selectCurrency } from "../filter/selectors";

const selectExpenses = state => state.expenses.expenses;
export const selectExpensesOffset = state => state.expenses.expenses.length;
export const selectIsLoading = state => state.expenses.loading;
const selectLoaded = state => state.expenses.loaded;
const selectError = state => state.expenses.error;
export const selectTotal = state => state.expenses.total;

export const selectIsShowLoadMore = createSelector(
  selectLoaded,
  selectIsLoading,
  selectTotal,
  selectExpenses,
  (loaded, loading, total, expenses) => !loading && loaded && total > expenses.length
);

export const selectIsShowError = createSelector(selectError, selectIsLoading, (error, loading) => !!error && !loading);

export const selectIsAllLoaded = createSelector(
  selectLoaded,
  selectExpensesOffset,
  selectTotal,
  (loaded, offset, total) => loaded && offset === total
);

export const selectIsShowNoItems = createSelector(
  selectLoaded,
  selectExpensesOffset,
  (loaded, offset) => loaded && offset === 0
);

const filterBySearch = (expenses, search) => {
  if (!search.trim()) {
    return expenses;
  } else {
    const s = search.toLowerCase();
    return expenses.filter(expense => {
      return (
        expense.merchant.toLowerCase().includes(s) ||
        expense.comment.toLowerCase().includes(s) ||
        `${expense.user.first} ${expense.user.last}`.toLowerCase().includes(s)
      );
    });
  }
};

const filterByCurrency = (expenses, currency) =>
  !currency ? expenses : expenses.filter(exp => exp.amount.currency === currency);

export const selectFilteredExpenses = createSelector(
  selectExpenses,
  selectSearch,
  selectCurrency,
  (expenses, search, currency) => filterBySearch(filterByCurrency(expenses, currency), search)
);

export const getUniqueCurrencies = expenses => {
  const options = [];
  const uniqueCurrencies = [];

  expenses.forEach(({ amount: { currency } }) => {
    if (!uniqueCurrencies.includes(currency)) {
      uniqueCurrencies.push(currency);
      options.push({ value: currency, label: currency });
    }
  });

  return options;
};

export const selectCurrenciesOptions = createSelector(selectExpenses, getUniqueCurrencies);
