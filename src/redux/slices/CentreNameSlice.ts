import {
    createSlice,
    createEntityAdapter,
    createSelector
  } from '@reduxjs/toolkit'
  
  import { ApiSlice } from '../api/ApiSlice'
  import { selectCentreResult } from '../api/CentreNameApiSlice'
  
  /* Temporarily ignore adapter - we'll use this again shortly
  const usersAdapter = createEntityAdapter()
  
  const initialState = usersAdapter.getInitialState()
  */
  
  // Calling `someEndpoint.select(someArg)` generates a new selector that will return
  // the query result object for a query with those parameters.
  // To generate a selector for a specific query argument, call `select(theQueryArg)`.
  // In this case, the users query has no params, so we don't pass anything to select()
  /////export const selectUsersResult = ApiSlice.endpoints.getUsers.select()
  
  const initialCentre = { Name: "anonymous centre" }
  
  export const useCentreSelector = createSelector(
    selectCentreResult,
    centreResult => centreResult?.data ?? initialCentre
  )

//   export const selectUserById = createSelector(
//     selectAllUsers,
//     (state, userId) => userId,
//     (users, userId) => users.find(user => user.id === userId)
//   )
  
  /* Temporarily ignore selectors - we'll come back to this later
  export const {
    selectAll: selectAllUsers,
    selectById: selectUserById,
  } = usersAdapter.getSelectors((state) => state.users)
  */