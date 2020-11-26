import * as actionTypes from './actionTypes'

export const saveResult = result => {
  return {
    type: actionTypes.STORE_RESULT,
    result: result
  }
}

export const storeResult = result => {
  return dispatch => {
    setTimeout(() => {
      dispatch(saveResult(result))
    }, 2000)
  }
}

export const removeResult = id => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultId: id
  }
}

export const deleteResult = id => {
  return dispatch => {
    setTimeout(() => {
      dispatch(removeResult(id))
    }, 2000)
  }
}
