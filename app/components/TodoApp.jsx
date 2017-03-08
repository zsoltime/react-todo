const React = require('react');
const TodoList = require('TodoList');
const AddTodo = require('AddTodo');
const TodoSearch = require('TodoSearch');
const uuid = require('node-uuid');

const TodoApp = React.createClass({
  getInitialState() {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Walk the dog',
        }, {
          id: uuid(),
          text: 'Clean the yard',
        }, {
          id: uuid(),
          text: 'Finish this todo app',
        }, {
          id: uuid(),
          text: 'Make a new app',
        },
      ],
    };
  },
  handleAddTodo(text) {
    const todos = [
      ...this.state.todos, {
        id: uuid(),
        text,
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
    const { todos } = this.state;
    return (
      <div className="row align-center">
        <div className="large-4 medium-6 column">
          <h1 className="page-title">Todo App</h1>
          <TodoList todos={todos} />
          <TodoSearch onSearch={this.handleSearch} />
          <AddTodo onAddTodo={this.handleAddTodo} />
        </div>
      </div>
    );
  },
});

module.exports = TodoApp;
