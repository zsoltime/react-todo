import React, { Component, PropTypes } from 'react';
import * as Redux from 'react-redux';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import * as actions from 'actions';

class TodoApp extends Component {
  onLogout(event) {
    const { dispatch } = this.props;
    event.preventDefault();

    dispatch(actions.startLogout());
  }
  render() {
    return (
      <div className="row align-center">
        <div className="large-5 medium-8 small-11 column">
          <div className="page-actions">
            <button
              className="button hollow"
              onClick={this.onLogout}
            >Logout</button>
          </div>
          <h1 className="page-title">Todo App</h1>
          <div className="todoapp">
            <TodoSearch />
            <TodoList />
            <AddTodo />
          </div>
        </div>
      </div>
    );
  }
}

TodoApp.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default Redux.connect()(TodoApp);
