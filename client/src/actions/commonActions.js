import {
  GET_ERRORS,
  EXPENSES_LOADING,
  SWITCH_ADMIN,
  SWITCH_LANGUAGE
} from './types';

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

export const switchAdmin = adminStatus => {
  return {
    type: SWITCH_ADMIN,
    payload: adminStatus
  };
};

export const switchLanguage = language => {
  return {
    type: SWITCH_LANGUAGE,
    payload: language
  };
};
