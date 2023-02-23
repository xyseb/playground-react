import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';

import { fetchCentreNameEpic } from './centreNameEpic';
import { fetchCentreParamsEpic } from './centreParamsEpic';

import centreName from '../reducers/centreName'
import centreParams from '../reducers/centreParams'

// Root Epic pour redux-observable

export const rootEpic = combineEpics(
  fetchCentreNameEpic,
  fetchCentreParamsEpic
);

export const rootReducer = combineReducers({
  centreName,
  centreParams
});