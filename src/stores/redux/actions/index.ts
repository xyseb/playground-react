import * as types from '../constants/ActionTypes'
import { getApiCentreName, getApiCentreParams } from '../services'

const fetchCentreNamePending = () => {
    return {
        type: types.FETCH_CENTRENAME_PENDING,
    };
};
const fetchCentreNameSuccess = (json: any) => {
    return {
        type: types.FETCH_CENTRENAME_SUCCESS,
        payload: { items: json, placeholders: json },
    };
};
const fetchCentreNameFailure = (error: any) => {
    return {
        type: types.FETCH_CENTRENAME_ERROR,
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
        type: types.FETCH_CENTRENAME_PENDING,
    };
};
const fetchCentreParamsSuccess = (json: any) => {
    return {
        type: types.FETCH_CENTRENAME_SUCCESS,
        payload: { items: json, placeholders: json },
    };
};
const fetchCentreParamsFailure = (error: any) => {
    return {
        type: types.FETCH_CENTRENAME_ERROR,
        payload: { error },
    };
};

export const fetchCentreParams = () => (dispatch: any) => {
    dispatch(fetchCentreNamePending());
    getApiCentreName()
      .then((data) => dispatch(fetchCentreNameSuccess(data)))
      .catch((err) => dispatch(fetchCentreNameFailure(err)));
}

