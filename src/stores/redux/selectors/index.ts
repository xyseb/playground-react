import { createSelector } from 'reselect'
//import { RootState } from '../../rtk/RtkStore'
import centreNameReducer from '../reducers/centreNameReducer'

//import { FILTER } from '../constants/ActionTypes'

//const getVisibilityFilter = state => state.visibilityFilter
const getCentreName = (state : any) => {
    console.log('state++++++++++');
    console.log(state);
    
    state.centre.name
}

export const getName = createSelector(
    getCentreName,
    (centreName) => {
        return centreName
    }
)
