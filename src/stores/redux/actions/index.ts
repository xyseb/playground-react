import * as types from '../constants/ActionTypes'

export const addCentrename = text => ({ type: types.ADD_CENTRENAME, text })
export const deleteCentrename = id => ({ type: types.DELETE_CENTRENAME, id })
export const editCentrename = (id, text) => ({ type: types.EDIT_CENTRENAME, id, text })
export const completeCentrename = id => ({ type: types.COMPLETE_CENTRENAME, id })
export const completeAllCentrenames = () => ({ type: types.COMPLETE_ALL_CENTRENAMES })
export const clearCompleted = () => ({ type: types.CLEAR_COMPLETED })
export const setVisibilityFilter = filter => ({ type: types.SET_VISIBILITY_FILTER, filter})
