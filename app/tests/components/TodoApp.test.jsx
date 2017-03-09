const React = require('react');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const uuid = require('node-uuid');

const TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  describe('handleAddTodo', () => {
    it('should add todo to the state on handleAddTodo', () => {
      const todoText = 'Sample todo text';
      const todoApp = TestUtils.renderIntoDocument(<TodoApp />);
      todoApp.setState({ todos: [] });
      todoApp.handleAddTodo(todoText);

      expect(todoApp.state.todos.length).toBe(1);
      expect(todoApp.state.todos[0].text).toBe(todoText);
      expect(todoApp.state.todos[0].createdAt).toBeA('number');
    });
  });
  describe('handleToggle', () => {
    it('should toggle completed value when handleToggle called', () => {
      const id = uuid();
      const todo = {
        id,
        text: 'Write one more test',
        completed: false,
        createdAt: new Date().getTime(),
        completedAt: undefined,
      };
      const todoApp = TestUtils.renderIntoDocument(<TodoApp />);
      todoApp.setState({ todos: [todo] });

      expect(todoApp.state.todos[0].completed).toBe(false);
      todoApp.handleToggle(id);
      expect(todoApp.state.todos[0].completed).toBe(true);
      expect(todoApp.state.todos[0].completedAt).toBeA('number');
    });
  });

  it('should toggle todo from completed to incomplete', () => {
    const id = uuid();
    const todo = {
      id,
      text: 'Write one more test',
      completed: true,
      createdAt: new Date().getTime(),
      completedAt: new Date().getTime(),
    };
    const todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({ todos: [todo] });

    expect(todoApp.state.todos[0].completed).toBe(true);
    todoApp.handleToggle(id);
    expect(todoApp.state.todos[0].completed).toBe(false);
    expect(todoApp.state.todos[0].completedAt).toNotExist();
  });
});
