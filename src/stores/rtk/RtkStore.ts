import { configureStore } from '@reduxjs/toolkit'
import centreReducer from '../../components/Pages/RtkStorePage/Centre/CentreSlice'

export const rtkStore = configureStore({
  reducer: {
    centre: centreReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rtkStore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof rtkStore.dispatch

//import actions from './actions/actions'
// import centreNameReducer from './reducers/reducer'

// const rtkStore = configureStore({reducer: centreNameReducer})

// console.log(rtkStore.getState())
// console.log(rtkStore.dispatch(actions.fetchCentreName()))