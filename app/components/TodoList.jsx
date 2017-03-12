const React = require('react');
const { connect } = require('react-redux');
import Todo from 'Todo';
import TodoAPI from 'TodoAPI';

export const TodoList = React.createClass({
  propTypes: {
    todos: React.PropTypes.arrayOf(
      React.PropTypes.object.isRequired,
    ).isRequired,
  },
  render() {
    const { todos, showCompleted, searchText } = this.props;
    const renderTodos = () => {
      if (todos.length === 0) {
        return (
          <li className="todoapp__message">Nothing to do</li>
        );
      }
      return TodoAPI.filterTodos(todos, showCompleted, searchText)
        .map(todoItem => (
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

export default connect(state => { return state; })(TodoList);
