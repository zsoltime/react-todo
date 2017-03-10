const React = require('react');
const { connect } = require('react-redux');
import Todo from 'Todo';

export const TodoList = React.createClass({
  propTypes: {
    todos: React.PropTypes.arrayOf(
      React.PropTypes.object.isRequired,
    ).isRequired,
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
        <Todo key={todoItem.id} {...todoItem} />
      ));
    };
    return (
      <ul className="todo">
        { renderTodos() }
      </ul>
    );
  },
});

export default connect(state => ({ todos: state.todos }))(TodoList);
