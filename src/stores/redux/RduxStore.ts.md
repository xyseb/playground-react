import { getApiCentreName, getApiCentreParams } from './services'

import { combineReducers, createStore } from 'redux'
import reducer from '../../stores/redux/reducers'


// Action types
//export const FETCH_CENTRENAME = 'FETCH_CENTRENAME'
export const FETCH_CENTRENAME_PENDING = 'FETCH_CENTRENAME_PENDING'
export const FETCH_CENTRENAME_SUCCESS = 'FETCH_CENTRENAME_SUCCESS'
export const FETCH_CENTRENAME_ERROR = 'FETCH_CENTRENAME_ERROR'

export const FETCH_CENTREPARAMS = 'FETCH_CENTREPARAMS'
export const FETCH_CENTREPARAMS_PENDING = 'FETCH_CENTRENAME_PENDING'
export const FETCH_CENTREPARAMS_SUCCESS = 'FETCH_CENTRENAME_SUCCESS'
export const FETCH_CENTREPARAMS_ERROR = 'FETCH_CENTRENAME_ERROR'


// Actions
const fetchCentreNamePending = () => {
    return {
        type: FETCH_CENTRENAME_PENDING,
    };
};
const fetchCentreNameSuccess = (json: any) => {
    return {
        type: FETCH_CENTRENAME_SUCCESS,
        payload: { items: json, placeholders: json },
    };
};
const fetchCentreNameFailure = (error: any) => {
    return {
        type: FETCH_CENTRENAME_ERROR,
        payload: { error },
    };
};

export const fetchCentreName = () => (dispatch: any) => {
    dispatch(fetchCentreNamePending());
    getApiCentreName()
      .then((data) => dispatch(fetchCentreNameSuccess(data)))
      .catch((err) => dispatch(fetchCentreNameFailure(err)));
}

const fetchCentreParamsPending = () => {
    return {
        type: FETCH_CENTRENAME_PENDING,
    };
};
const fetchCentreParamsSuccess = (json: any) => {
    return {
        type: FETCH_CENTRENAME_SUCCESS,
        payload: { items: json, placeholders: json },
    };
};
const fetchCentreParamsFailure = (error: any) => {
    return {
        type: FETCH_CENTRENAME_ERROR,
        payload: { error },
    };
};

export const fetchCentreParams = () => (dispatch: any) => {
    dispatch(fetchCentreNamePending());
    getApiCentreName()
      .then((data) => dispatch(fetchCentreNameSuccess(data)))
      .catch((err) => dispatch(fetchCentreNameFailure(err)));
}

// Epics




// Reducers
const initialState = [
    {
      text: 'Use Redux',
      completed: false,
      id: 0
    }
]
  
function centreNameReducer(state = initialState, action) {
    switch (action.type) {
      case ADD_CENTRENAME:
        return [
          ...state,
          {
            id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
            completed: false,
            text: action.text
          }
        ]
  
      case DELETE_CENTRENAME:
        return state.filter(todo =>
          todo.id !== action.id
        )
  
      case EDIT_CENTRENAME:
        return state.map(todo =>
          todo.id === action.id ?
            { ...todo, text: action.text } :
            todo
        )
  
      case COMPLETE_CENTRENAMES:
        return state.map(todo =>
          todo.id === action.id ?
            { ...todo, completed: !todo.completed } :
            todo
        )
  
      case COMPLETE_ALL_CENTRENAME:
        const areAllMarked = state.every(todo => todo.completed)
        return state.map(todo => ({
          ...todo,
          completed: !areAllMarked
        }))
  
      case CLEAR_COMPLETED:
        return state.filter(todo => todo.completed === false)
  
      default:
        return state
    }
}
  


export default combineReducers({
    centreNameReducer,
    centreParamsReducer,
    //visibilityFilter
  })


// Store

export const reduxStore = createStore(reducer)
