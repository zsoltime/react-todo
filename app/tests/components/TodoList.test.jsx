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
    const todos = [
      {
        id: uuid(),
        text: 'Test item #1',
        completed: false,
      },
      {
        id: uuid(),
        text: 'Test item #2',
        completed: false,
      },
      {
        id: uuid(),
        text: 'Test item #3',
        completed: false,
      },
    ];
    it('should render the correct number of todos', () => {
      const todoList = TestUtils.renderIntoDocument(
        <TodoList todos={todos} />,
      );
      const todoItems = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

      expect(todoItems.length).toBe(todos.length);
    });

    it('should render in the correct order', () => {
      const todoList = TestUtils.renderIntoDocument(
        <TodoList todos={todos} />,
      );
      const el = TestUtils.scryRenderedDOMComponentsWithTag(todoList, 'li');

      expect(el[0].innerText).toBe('Test item #1');
      expect(el[1].innerText).toBe('Test item #2');
      expect(el[2].innerText).toBe('Test item #3');
    });
  });
});
