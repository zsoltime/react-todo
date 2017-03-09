const React = require('react');

const Todo = React.createClass({
  propTypes: {
    id: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired,
    completed: React.PropTypes.bool.isRequired,
    onToggle: React.PropTypes.func.isRequired,
  },
  render() {
    const { id, text, completed } = this.props;
    return (
      <li onClick={() => { this.props.onToggle(id); }}>
        <input
          type="checkbox"
          checked={completed}
          id={id}
        />
        <label htmlFor={id}>{text}</label>
      </li>
    );
  },

});

module.exports = Todo;
