const React = require('react');
const Todo = require('Todo');

const TodoList = React.createClass({
  propTypes: {
    todos: React.PropTypes.arrayOf(
      React.PropTypes.object.isRequired,
    ).isRequired,
    onToggle: React.PropTypes.func.isRequired,
  },
  render() {
    const { todos } = this.props;
    const renderTodos = () => {
      if (todos.length === 0) {
        return (
          <li className="container__message">Nothing to do</li>
        );
      }
      return todos.map(todoItem => (
        <Todo key={todoItem.id} {...todoItem} onToggle={this.props.onToggle} />
      ));
    };
    return (
      <ul className="todo">
        { renderTodos() }
      </ul>
    );
  },

});

module.exports = TodoList;
