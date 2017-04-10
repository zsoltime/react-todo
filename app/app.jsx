const React = require('react');
const { render } = require('react-dom');
const { Provider } = require('react-redux');
// const { Route, Router, IndexRoute, hashHistory } = require('react-router');

const TodoApp = require('TodoApp');

const actions = require('actions');
const store = require('configureStore').config();
const TodoAPI = require('TodoAPI');

store.dispatch(actions.startAddTodos());

require('style!css!sass!applicationStyles');

render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('app'),
);
