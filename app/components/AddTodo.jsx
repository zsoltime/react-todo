const React = require('react');

const AddTodo = React.createClass({
  propTypes: {
    onAddTodo: React.PropTypes.func.isRequired,
  },
  handleSubmit(e) {
    e.preventDefault();
    const task = this.task.value;
    if (task.length > 0) {
      this.props.onAddTodo(task);
      this.task.value = '';
    } else {
      this.task.focus();
    }
  },
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          ref={(node) => { this.task = node; }}
          placeholder="What do you need to do?"
        />
        <button className="button expanded">
          Add todo
        </button>
      </form>
    );
  },
});

module.exports = AddTodo;
