import { combineReducers } from 'redux'
import languages from './languages'
import types from './types'

const rootReducer = combineReducers({
  languages,
  types
})

export default rootReducer
