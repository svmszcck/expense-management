import { testReducer } from "../../../helpers/testHelpers";
import { rootReducer } from "../index";
import { fetchExpensesRequest, fetchExpensesError, fetchExpensesSuccess } from "./actions";
import { selectExpenses, selectLoading, selectLoaded, selectError, selectTotal, selectIsLoadMore } from "./selectors";
import { expense1, expense2 } from "./expenses.mock.js";
import { initialState } from "./reducer";

const error = "Error Message";
const requestData = {
  expenses: [expense1],
  total: 10
};
const requestData2 = {
  expenses: [expense2],
  total: 20
};

describe("Expenses reducer test", () => {
  it("should represent initial state", () => {
    testReducer(rootReducer)
      .expect(selectExpenses, [])
      .expect(selectLoading, false)
      .expect(selectLoaded, false)
      .expect(selectError, null)
      .expect(selectIsLoadMore, false)
      .expect(selectTotal, 0);
  });

  it("should represent loading state", () => {
    testReducer(rootReducer)
      .put(fetchExpensesRequest())
      .expect(selectExpenses, [])
      .expect(selectLoading, true)
      .expect(selectLoaded, false)
      .expect(selectError, null)
      .expect(selectIsLoadMore, false)
      .expect(selectTotal, 0);
  });

  it("should represent error state", () => {
    testReducer(rootReducer)
      .put(fetchExpensesRequest())
      .expect(selectLoading, true)
      .put(fetchExpensesError(error))
      .expect(selectExpenses, [])
      .expect(selectLoading, false)
      .expect(selectLoaded, false)
      .expect(selectError, error)
      .expect(selectIsLoadMore, false)
      .expect(selectTotal, 0);
  });

  it("should represent success loaded state", () => {
    testReducer(rootReducer, { expenses: initialState })
      .put(fetchExpensesError(error))
      .expect(selectError, error)
      .put(fetchExpensesRequest())
      .expect(selectLoading, true)
      .put(fetchExpensesSuccess(requestData))
      // should add loaded expenses to already existed
      .expect(selectExpenses, [...initialState.expenses, expense1])
      .expect(selectLoading, false)
      .expect(selectLoaded, true)
      .expect(selectError, null)
      .expect(selectTotal, requestData.total)
      .expect(selectIsLoadMore, true)
      .put(fetchExpensesSuccess(requestData2))
      .expect(selectExpenses, [...initialState.expenses, expense1, expense2])
      .expect(selectLoading, false)
      .expect(selectLoaded, true)
      .expect(selectIsLoadMore, true)
      .expect(selectError, null)
      .expect(selectTotal, requestData2.total);
  });

  it("should represent all expenses loaded state", () => {
    const total = 2;
    testReducer(rootReducer, { expenses: initialState })
      .put(fetchExpensesSuccess({ expenses: [expense1], total }))
      .expect(selectIsLoadMore, true)
      .put(fetchExpensesSuccess({ expenses: [expense2], total }))
      .expect(selectIsLoadMore, false);
  });
});
