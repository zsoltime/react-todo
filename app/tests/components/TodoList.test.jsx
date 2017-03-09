const React = require('react');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');

const TodoList = require('TodoList');
const Todo = require('Todo');
const uuid = require('node-uuid');

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  describe('render', () => {
    const handleToggle = () => {
      // stop complaining about failed prop types
    };
    const todos = [
      {
        id: uuid(),
        text: 'Test item #1',
        completed: false,
        createdAt: new Date().getTime(),
      },
      {
        id: uuid(),
        text: 'Test item #2',
        completed: false,
        createdAt: new Date().getTime(),
      },
      {
        id: uuid(),
        text: 'Test item #3',
        completed: false,
        createdAt: new Date().getTime(),
      },
    ];

    it('should render the correct number of todos', () => {
      const todoList = TestUtils.renderIntoDocument(
        <TodoList todos={todos} onToggle={handleToggle} />,
      );
      const todoItems = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

      expect(todoItems.length).toBe(todos.length);
    });

    // ??? should I still test it here?
    it('should render in the correct order', () => {
      const todoList = TestUtils.renderIntoDocument(
        <TodoList todos={todos} onToggle={handleToggle} />,
      );
      const el = TestUtils.scryRenderedDOMComponentsWithTag(todoList, 'input');

      expect(el[0].id).toBe(todos[0].id);
      expect(el[1].id).toBe(todos[1].id);
      expect(el[2].id).toBe(todos[2].id);
    });

    it('should render empty message if no todos', () => {
      const todoList = TestUtils.renderIntoDocument(
        <TodoList todos={[]} onToggle={handleToggle} />,
      );
      const el = TestUtils.scryRenderedDOMComponentsWithClass(todoList, 'container__message');

      expect(el.length).toBe(1);
    });
  });
});
