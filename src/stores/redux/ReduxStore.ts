import { createStore } from 'redux'
import reducer from '../../stores/redux/reducers'

export const reduxStore = createStore(reducer)
