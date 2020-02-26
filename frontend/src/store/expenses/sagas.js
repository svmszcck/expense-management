import { call, put, takeLatest } from "redux-saga/effects";
import { FETCH_EXPENSES, EXPENSES_FETCHED } from './actions';
import { fetchExpenses } from "../../api";

function* loadExpensesSaga() {
  try {
    const offset = 0;
    const data = yield call(fetchExpenses, offset);
    yield put({ type: EXPENSES_FETCHED, payload: data });
  } catch (e) { }
}

export default function* expensesSaga() {
  yield takeLatest(FETCH_EXPENSES, loadExpensesSaga);
}
