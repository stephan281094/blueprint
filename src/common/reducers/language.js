// Constants
export const LANGUAGES_FILTERED_BY_KEY = 'LANGUAGES_FILTERED_BY_KEY'
export const LANGUAGE_SET_OPTION = 'LANGUAGE_SET_OPTION'

// Actions
export function getLanguagesByKey (key) {
  return {
    type: LANGUAGES_FILTERED_BY_KEY,
    key
  }
}

export function setLanguageOption (key) {
  return {
    type: LANGUAGE_SET_OPTION,
    key
  }
}

// Initial State
const initialState = {
  current: null,
  list: [
    { key: 'php', value: 'PHP' },
    { key: 'js', value: 'JavaScript' },
    { key: 'html', value: 'HTML' }
  ]
}

// Reducers
const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case LANGUAGES_FILTERED_BY_KEY:
      return Object.assign({}, state, {
        current: state.list.filter((lang) => {
          return lang.key === action.key
        })[0]
      })
    case LANGUAGE_SET_OPTION:
      console.log('setting language')
      return state
    default:
      return state
  }
}

export default languageReducer
