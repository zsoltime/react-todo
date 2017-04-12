import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Todo from 'Todo';
import TodoAPI from 'TodoAPI';

export class TodoList extends Component {
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
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
  showCompleted: PropTypes.bool.isRequired,
  searchText: PropTypes.string.isRequired,
};

export default connect(state => state)(TodoList);
