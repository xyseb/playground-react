import { configureStore } from '@reduxjs/toolkit'
import centreReducer from '../../components/Pages/RtkStorePage/Centre/CentreSlice'

// Automatically adds the thunk middleware and the Redux DevTools extension
export const rtkStore = configureStore({
  // Automatically calls `combineReducers`
  reducer: {
    centre: centreReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RtkRootState = ReturnType<typeof rtkStore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type RtkAppDispatch = typeof rtkStore.dispatch