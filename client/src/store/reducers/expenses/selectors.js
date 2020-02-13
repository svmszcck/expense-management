import { createSelector } from "reselect";

export const selectExpenses = state => state.expenses.expenses;
export const selectLoading = state => state.expenses.loading;
export const selectLoaded = state => state.expenses.loaded;
export const selectError = state => state.expenses.error;
export const selectTotal = state => state.expenses.total;
export const selectIsLoadMore = createSelector(
  selectLoaded,
  selectLoading,
  selectTotal,
  selectExpenses,
  (loaded, loading, total, expenses) => !loading && loaded && total > expenses.length
);
