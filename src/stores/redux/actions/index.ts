import * as types from '../constants/ActionTypes'
import { getCentreName, getCentreParams } from '../services'

const fetchCentreNamePending = () => {
    console.log('action => FETCH_CENTRENAME_PENDING');
    
    return {
        type: types.FETCH_CENTRENAME_PENDING,
    };
};
const fetchCentreNameSuccess = (json: any) => {
    console.log('action => FETCH_CENTRENAME_SUCCESS');
    
    return {
        type: types.FETCH_CENTRENAME_SUCCESS,
        payload: { items: json, placeholders: json },
    };
};
const fetchCentreNameFailure = (error: any) => {
    console.log('action => FETCH_CENTRENAME_ERROR');
    
    return {
        type: types.FETCH_CENTRENAME_ERROR,
        payload: { error },
    };
};

export const fetchCentreName = () => (dispatch: any) => {
    dispatch(fetchCentreNamePending());
    getCentreName()
      .then((data) => dispatch(fetchCentreNameSuccess(data)))
      .catch((err) => dispatch(fetchCentreNameFailure(err)));
}

// export const fetchCentreParams = (centreParamsDataSet: CentreParamsDataSet) => ({ type: types.FETCH_CENTREPARAMS, centreParamsDataSet })
// export const addCentreParam = (centreParam: CentreParam) => ({ type: types.ADD_CENTREPARAM, centreParam })
// export const deleteCentreParam = (centreParam: CentreParam) => ({ type: types.DELETE_CENTREPARAM, centreParam })
// export const updateCentreParam = (centreParam: CentreParam) => ({ type: types.UPDATE_CENTREPARAM, centreParam })
