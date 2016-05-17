import { combineReducers } from 'redux'
import language from './language'
import types from './types'

const rootReducer = combineReducers({
  language,
  types
})

export default rootReducer
