import { SWITCH_ADMIN } from '../actions/types';

const initialState = {
  admin: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_ADMIN:
      return {
        ...state,
        admin: action.payload
      };
    default:
      return state;
  }
};
