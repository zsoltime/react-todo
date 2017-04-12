import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

import Login from 'Login';
import TodoApp from 'TodoApp';
import TodoAPI from 'TodoAPI';
import * as actions from 'actions';

const store = require('configureStore').config();

store.dispatch(actions.startAddTodos());

require('style!css!sass!applicationStyles');

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/">
        <Route path="todos" component={TodoApp} />
        <IndexRoute component={Login} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app'),
);
