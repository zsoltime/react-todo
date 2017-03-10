const { combineReducers, createStore, compose } = require('redux');
const { searchTextReducer, showCompletedReducer, todosReducer } = require('reducers');

export const config = (initialState = {}) => {
  const reducer = combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer,
  });
  const store = createStore(reducer, initialState, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ));

  return store;
};
