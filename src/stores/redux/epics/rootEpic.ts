import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';

import { fetchCentreNameEpic } from './centreNameEpic';
import { fetchCentreParamsEpic } from './centreParamsEpic';

// Root Epic pour redux-observable
export const rootEpic = combineEpics(
  fetchCentreNameEpic,
  fetchCentreParamsEpic
);
