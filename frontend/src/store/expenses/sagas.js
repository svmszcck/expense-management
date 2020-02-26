import { call, put, takeLatest } from "redux-saga/effects";
import { FETCH_EXPENSES, EXPENSES_FETCHED, EXPENSES_FETCHING } from './actions';
import { SHOW_NOTIFICATION } from '../global/actions';
import { fetchExpenses } from '../../api';
import { NotificationTypes } from '../../components/notification';

function* loadExpensesSaga({ payload: { offset = 0 } }) {
  yield put({ type: EXPENSES_FETCHING, payload: true });
  try {
    const data = yield call(fetchExpenses, offset);
    yield put({ type: EXPENSES_FETCHED, payload: data });
  } catch (e) {
    yield put({ type: EXPENSES_FETCHING, payload: false });
    yield put({ type: SHOW_NOTIFICATION, payload: {
      message: 'Failed to fetch expenses...',
      type: NotificationTypes.ERROR
    } });
  }
}

export default function* expensesSaga() {
  yield takeLatest(FETCH_EXPENSES, loadExpensesSaga);
}
