import * as actionTypes from '../actions/actionTypes'

const initialState = {
  results: []
}

const reducer = (state = initialState, action) => {
  const updatedResults = state.results.filter(result => result.id !== action.resultId)
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.result })
      }
    case actionTypes.DELETE_RESULT:
      return {
        ...state,
        results: updatedResults
      }
    default:
      return state
  }
}

export default reducer
