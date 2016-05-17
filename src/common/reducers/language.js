// Constants
export const LANGUAGES_FILTERED_BY_KEY = 'LANGUAGES_FILTERED_BY_KEY'

// Actions
export function getLanguagesByKey (key) {
  return {
    type: LANGUAGES_FILTERED_BY_KEY,
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
    default:
      return state
  }
}

export default languageReducer
