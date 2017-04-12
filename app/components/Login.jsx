import React, { createClass } from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';

const Login = createClass({
  onLogin() {
    const { dispatch } = this.props;
    dispatch(actions.startLogin());
  },
  render() {
    return (
      <div>
        <h1 className="page-title">Todo App</h1>
        <div className="row align-center">
          <div className="columns small-10 medium-6 large-4">
            <div className="callout callout--auth">
              <h3>Login</h3>
              <p>Login with your GitHub account below</p>
              <button
                className="button"
                onClick={this.onLogin}
              >Login with GitHub</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default Redux.connect()(Login);
