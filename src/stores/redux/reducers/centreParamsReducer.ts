import * as types from '../constants/ActionTypes'

const initialState = [
    {
      params: [{id: 0, param0: 'initial centreParams from reducer'}],
      error: null,
      loading: false,
    }
]
  
export default function centreNameReducer(state = initialState, action : { type:string, payload:any }) {
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
  