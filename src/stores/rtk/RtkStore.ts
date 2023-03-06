import { configureStore } from '@reduxjs/toolkit'
import centreReducer, { centreSlice } from '../../components/Pages/RtkStorePage/Centre/CentreSlice'

// Automatically adds the thunk middleware and the Redux DevTools extension
export const rtkStore = configureStore({
  // Automatically calls `combineReducers`
  reducer: {
    centre: centreSlice.reducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RtkRootState = ReturnType<typeof rtkStore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type RtkAppDispatch = typeof rtkStore.dispatch

export const selectName = (state: RtkRootState) => state.centre.name;
export const selectParams = (state: RtkRootState) => state.centre.params;
export const selectCentre = (state: RtkRootState) => state.centre;
