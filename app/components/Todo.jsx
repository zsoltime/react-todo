const React = require('react');
const fecha = require('fecha');

const Todo = React.createClass({
  propTypes: {
    id: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired,
    completed: React.PropTypes.bool.isRequired,
    onToggle: React.PropTypes.func.isRequired,
    createdAt: React.PropTypes.number.isRequired,
    completedAt: React.PropTypes.number,
  },
  getDefaultProps() {
    return {
      completedAt: undefined,
    };
  },
  render() {
    const { id, text, completed, createdAt, completedAt } = this.props;
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
          onChange={() => { this.props.onToggle(id); }}
        />
        <label htmlFor={id}>
          {text}
          <small>{renderDate()}</small>
        </label>
      </li>
    );
  },
});

module.exports = Todo;
