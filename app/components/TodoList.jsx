import React from 'react';
import { connect } from 'react-redux';

import Todo from 'Todo';
import TodoAPI from 'TodoAPI';

export const TodoList = React.createClass({
  propTypes: {
    todos: React.PropTypes.arrayOf(
      React.PropTypes.object.isRequired,
    ).isRequired,
    showCompleted: React.PropTypes.bool.isRequired,
    searchText: React.PropTypes.string.isRequired,
  },
  render() {
    const { todos, showCompleted, searchText } = this.props;
    const renderTodos = () => {
      const filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
      if (filteredTodos.length === 0) {
        return (
          <li className="todoapp__message">Nothing to do</li>
        );
      }
      return filteredTodos.map(todoItem => (
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

export default connect(state => state)(TodoList);
