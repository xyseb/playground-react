import { createReducer } from "@reduxjs/toolkit";
import actions from '../actions/actions'


const { fetchCentreName, updateCentreName } = actions

const initialState = {
    Name: "Initial state from reducer"
}

// const centreNameReducer = createReducer(initialState, {
//     [fetchCentreName: string]: state.Name = 'coucou',
//     [updateCentreName]: state.Name = 'coucouUpodated'
// });

// export default centreNameReducer;