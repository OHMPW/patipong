import { SELECT_LANGUAGE } from '../actions_const'
import dictionary from '../../assets/lang'
import Cookies from 'js-cookie'

let defaultLocale = Cookies.get('__lang') || 'th'
let initState = {
  defaultLocale: Cookies.get('__lang') || 'th',
  dictionary: dictionary[defaultLocale]
}

export default (state = initState, action) => {
  switch (action.type) {
    case SELECT_LANGUAGE:
      return Object.assign({}, state, {
        defaultLocale: action.data,
        dictionary: dictionary[action.data]
      })
    default:
      return state
  }
}