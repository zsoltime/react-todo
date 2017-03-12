const React = require('react');
const uuid = require('node-uuid');

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

const TodoApp = React.createClass({
  render() {
    return (
      <div className="row align-center">
        <div className="large-5 medium-8 small-11 column">
          <h1 className="page-title">Todo App</h1>
          <div className="todoapp">
            <TodoSearch />
            <TodoList />
            <AddTodo />
          </div>
        </div>
      </div>
    );
  },
});

module.exports = TodoApp;
