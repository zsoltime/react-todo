const React = require('react');
const uuid = require('node-uuid');

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
const TodoAPI = require('TodoAPI');

const TodoApp = React.createClass({
  getInitialState() {
    return {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos(),
    };
  },
  componentDidUpdate() {
    TodoAPI.setTodos(this.state.todos);
  },
  handleAddTodo(text) {
    const todos = [
      ...this.state.todos, {
        id: uuid(),
        text,
        completed: false,
        createdAt: new Date().getTime(),
        completedAt: undefined,
      },
    ];
    this.setState({
      todos,
    });
  },
  handleSearch({ searchText, showCompleted }) {
    this.setState({
      searchText,
      showCompleted,
    });
  },
  render() {
    const { todos, showCompleted, searchText } = this.state;
    const filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    return (
      <div className="row align-center">
        <div className="large-5 medium-8 small-11 column">
          <h1 className="page-title">Todo App</h1>
          <div className="todoapp">
            <TodoSearch onSearch={this.handleSearch} />
            <TodoList />
            <AddTodo />
          </div>
        </div>
      </div>
    );
  },
});

module.exports = TodoApp;
