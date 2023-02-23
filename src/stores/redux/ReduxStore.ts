import { createStore } from 'redux'
import { rootReducer } from '../../stores/redux/reducers/rootReducer'

const reduxStore = createStore(rootReducer)

export default reduxStore;