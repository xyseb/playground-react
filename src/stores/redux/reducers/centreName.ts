import {
ADD_CENTRENAME,
DELETE_CENTRENAME,
EDIT_CENTRENAME,
COMPLETE_CENTRENAME,
COMPLETE_ALL_CENTRENAMES,
CLEAR_COMPLETED
} from '../constants/ActionTypes'

const initialState = [
    {
      text: 'Use Redux',
      completed: false,
      id: 0
    }
]
  
export default function centreName(state = initialState, action) {
    switch (action.type) {
      case ADD_CENTRENAME:
        return [
          ...state,
          {
            id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
            completed: false,
            text: action.text
          }
        ]
  
      case DELETE_CENTRENAME:
        return state.filter(todo =>
          todo.id !== action.id
        )
  
      case EDIT_CENTRENAME:
        return state.map(todo =>
          todo.id === action.id ?
            { ...todo, text: action.text } :
            todo
        )
  
      case COMPLETE_CENTRENAMES:
        return state.map(todo =>
          todo.id === action.id ?
            { ...todo, completed: !todo.completed } :
            todo
        )
  
      case COMPLETE_ALL_CENTRENAME:
        const areAllMarked = state.every(todo => todo.completed)
        return state.map(todo => ({
          ...todo,
          completed: !areAllMarked
        }))
  
      case CLEAR_COMPLETED:
        return state.filter(todo => todo.completed === false)
  
      default:
        return state
    }
}
  