// Constants
export const APP_SHOW_MODAL = 'APP_SHOW_MODAL'
export const APP_HIDE_MODAL = 'APP_HIDE_MODAL'

// Actions
export function showModal () {
  return {
    type: APP_SHOW_MODAL
  }
}

export function hideModal () {
  return {
    type: APP_HIDE_MODAL
  }
}

// Initial State
const initialState = {
  showModal: false
}

// Reducers
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_SHOW_MODAL:
      return Object.assign({}, state, {
        showModal: true
      })
    case APP_HIDE_MODAL:
      return Object.assign({}, state, {
        showModal: false
      })
    default:
      return state
  }
}

export default appReducer
