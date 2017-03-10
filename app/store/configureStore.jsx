const { combineReducers, createStore, compose } = require('redux');
const { searchTextReducer, showCompletedReducer, todosReducer } = require('reducers');

export const config = () => {
  const reducer = combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer,
  });
  const store = createStore(reducer, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ));

  return store;
};
