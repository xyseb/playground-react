// import { Action } from 'redux';
import { ajax } from 'rxjs/ajax';
// import { ofType } from 'redux-observable'
// import { mergeMap, map } from 'rxjs'
// import { FETCH_CENTREPARAMS, FETCH_CENTREPARAMS_FULFILLED } from '../constants/ActionTypes'

// action creators
const fetchUser = username => ({ type: FETCH_CENTREPARAMS, payload: username });
const fetchUserFulfilled = payload => ({ type: FETCH_CENTREPARAMS_FULFILLED, payload });

// epic
export const fetchCentreParamsEpic = action$ => action$.pipe(
    ofType(FETCH_CENTREPARAMS),
    mergeMap(action =>
        ajax.getJSON(`http://localhost:8080/params`).pipe(
        map(response => fetchUserFulfilled(response))
        )
    )
);

