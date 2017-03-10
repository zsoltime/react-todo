const React = require('react');
const { render } = require('react-dom');
const { Provider } = require('react-redux');
// const { Route, Router, IndexRoute, hashHistory } = require('react-router');

const TodoApp = require('TodoApp');

const actions = require('actions');
const store = require('configureStore').config();

store.subscribe(() => {
  // eslint-disable-next-line no-console
  console.log('New state', store.getState());
});

store.dispatch(actions.addTodo('Buy tea'));
store.dispatch(actions.setSearchText('tea'));
store.dispatch(actions.toggleShowCompleted());

require('style!css!sass!applicationStyles');

render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('app'),
);
