import { SHOW_NOTIFICATION, CLEAR_NOTIFICATION } from './actions';

const initialState = {
  error: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_NOTIFICATION:
      return {
        ...state,
        notification: {
          ...payload
        }
      };
    case CLEAR_NOTIFICATION: {
      return {
        ...state,
        notification: null
      }
    }
    default:
      return state;
  }
};
