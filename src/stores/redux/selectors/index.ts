import { createSelector } from 'reselect'
import { RootState } from '../../rtk/RtkStore'
import centreName from '../reducers/centreName'

//import { FILTER } from '../constants/ActionTypes'

//const getVisibilityFilter = state => state.visibilityFilter
const getCentreName = (state : RootState) => state.centre.name

export const getName = createSelector(
    getCentreName,
    (centreName) => {
                return centreName
    }
)
