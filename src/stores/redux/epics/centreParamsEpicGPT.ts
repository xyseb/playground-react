import { ofType, Epic } from 'redux-observable';
import { from, of } from 'rxjs';
import { mergeMap, catchError, map } from 'rxjs/operators';
import { Action } from 'redux';

export const FETCH_PARAMS = 'FETCH_PARAMS';
export const FETCH_PARAMS_FULFILLED = 'FETCH_PARAMS_FULFILLED';
export const FETCH_PARAMS_REJECTED = 'FETCH_PARAMS_REJECTED';

export interface FetchParamsAction extends Action {
  type: typeof FETCH_PARAMS;
}

export interface FetchParamsFulfilledAction extends Action {
  type: typeof FETCH_PARAMS_FULFILLED;
  payload: {
    params: Record<string, any>;
  };
}

export interface FetchParamsRejectedAction extends Action {
  type: typeof FETCH_PARAMS_REJECTED;
  payload: Error;
}

export function fetchParams(): FetchParamsAction {
  return {
    type: FETCH_PARAMS,
  };
}

export function fetchParamsFulfilled(paramsData: { params: Record<string, any> }): FetchParamsFulfilledAction {
  return {
    type: FETCH_PARAMS_FULFILLED,
    payload: paramsData,
  };
}

export function fetchParamsRejected(error: Error): FetchParamsRejectedAction {
  return {
    type: FETCH_PARAMS_REJECTED,
    payload: error,
  };
}

const API_URL = 'http://localhost:8080/params';

export const paramsEpic: Epic = (action$) => action$.pipe(
  ofType(FETCH_PARAMS),
  mergeMap(() =>
    from(fetch(API_URL)).pipe(
      // Extract the JSON data from the response
      mergeMap((response) => from(response.json())),
      // Map the response to the action of type fetchParamsFulfilled with payload of params data
      map((paramsData: any) => fetchParamsFulfilled({ params: paramsData.params })),
      catchError((error) => of(fetchParamsRejected(error)))
    )
  )
);
