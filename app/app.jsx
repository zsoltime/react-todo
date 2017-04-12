import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { hashHistory } from 'react-router';

import Router from 'app/router';
import firebase from 'app/firebase';
import * as actions from 'actions';

const store = require('configureStore').config();
require('style!css!sass!applicationStyles');

store.dispatch(actions.startAddTodos());

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    hashHistory.push('/todos');
  } else {
    hashHistory.push('/');
  }
});

render(
  <Provider store={store}>
    { Router }
  </Provider>,
  document.getElementById('app'),
);
