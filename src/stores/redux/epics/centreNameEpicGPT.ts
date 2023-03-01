import { ofType, Epic } from 'redux-observable';
import { from, of } from 'rxjs';
import { mergeMap, catchError, map } from 'rxjs/operators';
import { Action } from 'redux';
import {
  FETCH_CENTRENAME_PENDING,
  FETCH_CENTRENAME_ERROR,
  FETCH_CENTRENAME_SUCCESS,
 } from '../constants/ActionTypes'
import { fetchCentreName } from '../actions'


export const FETCH_CENTER = 'FETCH_CENTER';
export const FETCH_CENTER_FULFILLED = 'FETCH_CENTER_FULFILLED';
export const FETCH_CENTER_REJECTED = 'FETCH_CENTER_REJECTED';

export interface FetchCenterAction extends Action {
  type: typeof FETCH_CENTER;
}

export interface FetchCenterFulfilledAction extends Action {
  type: typeof FETCH_CENTER_FULFILLED;
  payload: {
    name: string;
  };
}

export interface FetchCenterRejectedAction extends Action {
  type: typeof FETCH_CENTER_REJECTED;
  payload: Error;
}

export function fetchCenter(): FetchCenterAction {
  return {
    type: FETCH_CENTER,
  };
}

export function fetchCenterFulfilled(centerData: { name: string }): FetchCenterFulfilledAction {
  return {
    type: FETCH_CENTER_FULFILLED,
    payload: centerData,
  };
}

export function fetchCenterRejected(error: Error): FetchCenterRejectedAction {
  return {
    type: FETCH_CENTER_REJECTED,
    payload: error,
  };
}


const API_URL = 'http://localhost:8080/api/centre';

export const centerEpic: Epic = (action$) => action$.pipe(
  // Filter action type FETCH_CENTER
  ofType(FETCH_CENTRENAME_PENDING),
  mergeMap((action) =>
    // Send fetch request to the API
    from(fetch(API_URL)).pipe(
      // Map response to JSON
      mergeMap(response => from(response.json())),
      // Map JSON to action of type fetchCenterFulfilled with payload of center data
      map((centerData: any) => fetchCenterFulfilled(centerData)),
      // Catch and handle fetch errors
      catchError((error) => of(fetchCenterRejected(error)))
    )
  )
);
