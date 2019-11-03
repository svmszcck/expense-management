import { SWITCH_ADMIN } from '../actions/types';

const initialState = {
  admin: false
};

export default (state = initialState, action) => {
  if (action.type === 'SWITCH_ADMIN') {
    return {
      ...state,
      admin: action.payload
    };
  }
  return {
    ...state
  };
};
