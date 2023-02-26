import { Action, AnyAction } from 'redux';
import * as types from '../constants/ActionTypes'

const initialState = [
    {
      params: ['initial centreParams from reducer'],
      error: null,
      loading: false,
    }
]
  
export default function centreNameReducer(state = initialState, action : AnyAction) {
    switch (action.type) {
      case types.FETCH_CENTREPARAMS_PENDING:
        return {
          ...state,
          loading:true
        };

      case types.FETCH_CENTREPARAMS_ERROR:
        return {
          ...state,
          error: action.payload.error,
          loading:false
        };
  
      case types.FETCH_CENTREPARAMS_SUCCESS:
        return {
          ...state,
          ...action.payload,
          loading: false,
        };
  
      default:
        return state
    }
}
  