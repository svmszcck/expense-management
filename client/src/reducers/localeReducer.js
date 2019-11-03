import { SWITCH_LANGUAGE } from '../actions/types';

import contentEnglish from '../locale/english';
import contentGerman from '../locale/german';

const initialState = {
  language: 'ENG',
  content: contentEnglish
};

export default (state = initialState, action) => {
  if (action.type === 'SWITCH_LANGUAGE') {
    switch (action.payload) {
      case 'GER':
        return {
          ...state,
          language: 'GER',
          content: contentGerman
        };
      case 'ENG':
        return {
          ...state,
          language: 'ENG',
          content: contentEnglish
        };
      default:
        return { ...state };
    }
  }
  return {
    ...state
  };
};
