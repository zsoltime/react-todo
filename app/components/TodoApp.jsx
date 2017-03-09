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
          completed: false,
        }, {
          id: uuid(),
          text: 'Clean the yard',
          completed: true,
        }, {
          id: uuid(),
          text: 'Finish this todo app',
          completed: true,
        }, {
          id: uuid(),
          text: 'Make a new app',
          completed: false,
        },
      ],
    };
  },
  handleAddTodo(text) {
    const todos = [
      ...this.state.todos, {
        id: uuid(),
        text,
        completed: false,
      },
    ];
    this.setState({
      todos,
    });
  },
  handleToggle(id) {
    const todos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return Object.assign({}, todo, {
          completed: !todo.completed,
        });
      }
      return todo;
    });
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
    const filteredTodos = todos.filter(item => (
      item.text.toLowerCase().indexOf(this.state.searchText) >= 0
    ));
    return (
      <div className="row align-center">
        <div className="large-4 medium-6 column">
          <h1 className="page-title">Todo App</h1>
          <TodoSearch onSearch={this.handleSearch} />
          <TodoList todos={filteredTodos} onToggle={this.handleToggle} />
          <AddTodo onAddTodo={this.handleAddTodo} />
        </div>
      </div>
    );
  },
});

module.exports = TodoApp;
