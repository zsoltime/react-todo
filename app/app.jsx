const React = require('react');
const ReactDOM = require('react-dom');
// const { Route, Router, IndexRoute, hashHistory } = require('react-router');

const TodoApp = require('TodoApp');

const actions = require('actions');
const store = require('configureStore').config();

store.subscribe(() => {
  console.log('New state', store.getState());
});

store.dispatch(actions.addTodo('Buy tea'));
store.dispatch(actions.setSearchText('tea'));
store.dispatch(actions.toggleShowCompleted());

require('style!css!sass!applicationStyles');

ReactDOM.render(
  <TodoApp />,
  document.getElementById('app'),
);
