const React = require('react');
const TodoList = require('TodoList');

const TodoApp = React.createClass({
  getInitialState() {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog',
        }, {
          id: 2,
          text: 'Clean the yard',
        }, {
          id: 3,
          text: 'Finish this todo app',
        }, {
          id: 4,
          text: 'Make a new app',
        },
      ],
    };
  },
  render() {
    const { todos } = this.state;
    return (
      <TodoList todos={todos} />
    );
  },
});

module.exports = TodoApp;
