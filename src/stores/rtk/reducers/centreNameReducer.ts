import { AnyAction } from 'redux';
import * as types from '../constants/ActionTypes'

const initialState = [
    {
      name: 'initial centreName from reducer',
      error: null,
      loading: false,
    }
]
  
export default function centreNameReducer(state = initialState, action : AnyAction) {
    switch (action.type) {
      case types.FETCH_CENTRENAME_PENDING:
        return {
          ...state,
          loading:true
        };

      case types.FETCH_CENTRENAME_ERROR:
        return {
          ...state,
          error: action.payload.error,
          loading:false
        };
  
      case types.FETCH_CENTRENAME_SUCCESS:
        return {
          ...state,
          ...action.payload,
          loading: false,
        };
  
      default:
        return state
    }
}
  