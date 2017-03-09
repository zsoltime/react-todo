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
    const list = todos.map(todoItem => (
      <Todo key={todoItem.id} {...todoItem} onToggle={this.props.onToggle} />
    ));
    return (
      <ol>
        { list }
      </ol>
    );
  },

});

module.exports = TodoList;
