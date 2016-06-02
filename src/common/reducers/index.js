import { combineReducers } from 'redux'
import languages from './languages'
import types from './types'
import app from './app'

const rootReducer = combineReducers({
  languages,
  types,
  app
})

export default rootReducer
