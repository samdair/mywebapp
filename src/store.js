import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import promise from 'redux-promise-middleware';
//import logger from 'redux-logger';

import rootReducer from './reducers/rootReducer';

const store = createStore(
  rootReducer,
  //Comment logger back in to see state
  //compose(applyMiddleware(promise(), logger))
  compose(applyMiddleware(promise()))
);

export default store;