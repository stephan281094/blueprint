// Constants
export const TYPE_SET_OPTION = 'TYPE_SET_OPTION'

// Actions
export function setTypeOption (key) {
  return {
    type: TYPE_SET_OPTION,
    key
  }
}

// Initial State
const initialState = {
  selected: 'model',
  current: null,
  list: [
    { key: 'model', value: 'Model' },
    { key: 'view', value: 'View' },
    { key: 'controller', value: 'Controller' }
  ]
}

// Reducers
const typeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE_SET_OPTION:
      return Object.assign({}, state, {
        selected: action.key
      })
    default:
      return state
  }
}

export default typeReducer
