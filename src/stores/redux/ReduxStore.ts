import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable';
import { rootReducer } from './reducers/rootReducer'
import { rootEpic } from './epics/rootEpic'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//const composeEnhancers = compose;
const epicMiddleware = createEpicMiddleware();

// const reduxStore = createStore(
//     rootReducer,
//     composeEnhancers(applyMiddleware(createEpicMiddleware(rootEpic)))
// )

function configureStore() {
    const reduxStore = createStore(
      rootReducer,
      applyMiddleware(epicMiddleware)
    );
  
    epicMiddleware.run(rootEpic);
  
    return reduxStore;
  };

const reduxStore = configureStore();

export default reduxStore;

export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;
