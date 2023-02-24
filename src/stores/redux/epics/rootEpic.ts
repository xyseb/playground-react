import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';

import { centerEpic } from './centreNameEpicGPT';
import { paramsEpic } from './centreParamsEpicGPT';

// Root Epic pour redux-observable
export const rootEpic = combineEpics(
  centerEpic,
  paramsEpic
);
