import { SET_LANGUAGE } from './generalConstants';

export const initialState = {
    locale: 'pl_PL', // default locale
  };

  // Reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
      case SET_LANGUAGE:
        return { ...state, locale: action.locale };
      default:
        return state;
    }
  }

  