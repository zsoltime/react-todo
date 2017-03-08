const React = require('react');
const TodoList = require('TodoList');
const AddTodo = require('AddTodo');
const TodoSearch = require('TodoSearch');

const TodoApp = React.createClass({
  getInitialState() {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: 1,
          text: 'Walk the dog',
        }, {
          id: 2,
          text: 'Clean the yard',
        }, {
          id: 3,
          text: 'Finish this todo app',
        }, {
          id: 4,
          text: 'Make a new app',
        },
      ],
    };
  },
  handleAddTodo(task) {
    const todos = [...this.state.todos, {
      id: this.state.todos[this.state.todos.length - 1].id + 1,
      text: task,
    }];
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
