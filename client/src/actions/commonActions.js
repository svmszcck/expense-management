import { GET_ERRORS, EXPENSES_LOADING } from './types';

export const getError = data => {
  return {
    type: GET_ERRORS,
    payload: data
  };
};

export const setLoading = data => {
  switch (data) {
    case 'expenses': {
      return {
        type: EXPENSES_LOADING
      };
    }
  }
};
