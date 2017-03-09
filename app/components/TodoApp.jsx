const React = require('react');
const uuid = require('node-uuid');

const TodoList = require('TodoList');
const AddTodo = require('AddTodo');
const TodoSearch = require('TodoSearch');
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
    const { todos, showCompleted, searchText } = this.state;
    const filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

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
