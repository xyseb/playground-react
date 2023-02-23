import { combineReducers } from 'redux'
// import centreName from './centreName'
// import centreParams from './centreParams'
import centreNameReducer from './centreNameReducer'
import centreParamsReducer from './centreParamsReducer'

//import visibilityFilter from './visibilityFilter'

// export default combineReducers({
//   centreName,
//   centreParams,
//   //visibilityFilter
// })

export const rootReducer = combineReducers({
  centreNameReducer,
  centreParamsReducer
});