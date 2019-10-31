import axios from 'axios';

import { getError, setLoading } from './commonActions';

import { GET_EXPENSES } from './types';

export const getExpenses = () => dispatch => {
  dispatch(setLoading('expenses'));
  axios
    .get('/expenses')
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
