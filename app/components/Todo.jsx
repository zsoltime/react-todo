const React = require('react');
const { connect } = require('react-redux');
const fecha = require('fecha');
const actions = require('actions');

export const Todo = React.createClass({
  propTypes: {
    id: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired,
    completed: React.PropTypes.bool.isRequired,
    createdAt: React.PropTypes.number.isRequired,
    completedAt: React.PropTypes.number,
    dispatch: React.PropTypes.func.isRequired,
  },
  getDefaultProps() {
    return {
      completedAt: undefined,
    };
  },
  render() {
    const { id, text, completed, createdAt, completedAt, dispatch } = this.props;
    const todoClassName = completed ? 'todo__item todo__item--completed' : 'todo__item';
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
          onChange={() => { dispatch(actions.toggleTodo(id)); }}
        />
        <label htmlFor={id}>
          {text}
          <small>{renderDate()}</small>
        </label>
      </li>
    );
  },
});

export default connect()(Todo);
