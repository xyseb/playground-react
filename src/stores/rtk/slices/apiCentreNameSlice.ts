import { createSlice, PayloadAction, createAsyncThunk, AnyAction } from "@reduxjs/toolkit";
//import * as api from '../api';

type State = CentreName | null;

//export const fetchCentreName = createAsyncThunk("http://localhost:8080/centre", async () => api.fetchCentreName());
//export const fetchCentreParams = createAsyncThunk("http://localhost:8080/params", async () => api.fetchCentreParams());

const initialState = [
    {
      name: 'initial centreName from reducer',
      error: null,
      loading: false,
    }
]
  
/*export default function centreNameReducer(state = initialState, action : AnyAction) {
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
}*/
  