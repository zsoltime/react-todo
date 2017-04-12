import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import fecha from 'fecha';

import * as actions from 'actions';

export const Todo = (props) => {
  const {
    createdAt,
    completed,
    completedAt,
    dispatch,
    id,
    text,
  } = props;
  const todoClassName = completed ?
    'todo__item todo__item--completed' :
    'todo__item';
  const renderDate = () => {
    const message = completed ? 'Completed' : 'Created';
    const timestamp = completed ? completedAt : createdAt;

    return `${message} ${fecha.format(timestamp, 'MMM Do YYYY @ h:mm a')}`;
  };

  return (
    <li className={todoClassName}>
      <input
        type="checkbox"
        checked={completed}
        id={id}
        onChange={() => {
          dispatch(actions.startToggleTodo(id, !completed));
        }}
      />
      <label htmlFor={id}>
        {text}
        <small>{renderDate()}</small>
      </label>
    </li>
  );
};

Todo.defaultProps = {
  completedAt: undefined,
};

Todo.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  createdAt: PropTypes.number.isRequired,
  completedAt: PropTypes.number,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Todo);
