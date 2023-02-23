import * as types from '../constants/ActionTypes'

const initialState = [
    {
      Name: 'initial centreName from reducer',
      error: null,
      loading: false,
    }
]
  
export default function centreName(state = initialState, action : { type:string, payload:any }) {
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
  