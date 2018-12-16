import { SELECT_LANGUAGE } from '../actions_const'

export const selectLanguage = (lang) => {
  return dispatch => {
    dispatch({ type: SELECT_LANGUAGE, data: lang })
  }
}