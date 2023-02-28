import { Action as ReduxAction, Observable } from 'redux';
import { ajax } from 'rxjs/ajax';
import { ofType } from 'redux-observable'
import { mergeMap, map, BehaviorSubject } from 'rxjs'
import { FETCH_CENTRENAME } from '../constants/ActionTypes'

// import fetchCentreName from '../actions';
// import fetchCentreName, { updateCentreName } from '../actions'

interface Action extends ReduxAction {
    type: string;
    payload?: CentreNameDataSet;
};

// action creators
const fetchCentreName = (centrename: CentreName) => ({ type: FETCH_CENTRENAME });
// const updateCentreName = (centreName) => ({ type: ADD_CENTRENAME_FULFILLED, payload });

// epic
export const fetchCentreNameEpic = (action$: BehaviorSubject<Action>) => action$.pipe(
    ofType(FETCH_CENTRENAME),
    mergeMap(action =>
        ajax.getJSON(`http://localhost:8080/centres`).pipe(
        map(response => fetchCentreName(response))
        )
    )
);

