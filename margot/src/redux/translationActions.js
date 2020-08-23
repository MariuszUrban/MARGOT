import {SET_LANGUAGE} from './generalConstants'

export function setLanguage(locale) {
    return {
      type: SET_LANGUAGE,
      locale,
    };
  }