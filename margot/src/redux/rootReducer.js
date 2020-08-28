import { combineReducers } from 'redux';
import translationReducer from './translationReducer';
import questionReducer from './questionReducer'

export const rootReducer = combineReducers({
    translation: translationReducer,
    showHideForm: questionReducer,
  });