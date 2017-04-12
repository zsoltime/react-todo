import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import {
  authReducer,
  searchTextReducer,
  showCompletedReducer,
  todosReducer
} from 'reducers';

export const config = (initialState = {}) => {
  const reducer = combineReducers({
    auth: authReducer,
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer,
  });
  const store = createStore(reducer, initialState, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ));

  return store;
};
