import axios from 'axios';

import { getError, setLoading } from './commonActions';

import { GET_EXPENSES, GET_EXPENSE } from './types';

export const getExpenses = (offset = 0) => dispatch => {
  dispatch(setLoading('expenses'));
  axios
    .get('/expenses', { params: { offset, limit: 3 } })
    .then(res => {
      dispatch({
        type: GET_EXPENSES,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(getError(err.response.data));
    });
};

export const addReceiptImage = (imageData, config, id) => dispatch => {
  axios
    .post(`/expenses/${id}/receipts/`, imageData, config)
    .then(res => {
      dispatch({
        type: GET_EXPENSE,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(getError(err.response.data));
    });
};

export const updateExpense = (id, expense) => dispatch => {
  axios
    .post(`/expenses/${id}`, expense)
    .then(res => {
      dispatch({
        type: GET_EXPENSE,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(getError(err.response.data));
    });
};
