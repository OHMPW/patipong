import { SELECT_LANGUAGE } from '../actions_const'
import dictionary from '../../assets/lang'

let defaultLocale = 'en'

let initState = {
  dictionary: dictionary[defaultLocale]
}

export default (state = initState, action) => {
  switch (action.type) {
    case SELECT_LANGUAGE:
      return Object.assign({}, state, {
        dictionary: dictionary[action.data]
      })
    default:
      return state
  }
}