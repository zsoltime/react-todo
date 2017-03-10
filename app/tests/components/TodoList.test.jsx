const React = require('react');
const { Provider } = require('react-redux');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const uuid = require('node-uuid');

import { config } from 'configureStore';
import ConnectedTodoList, { TodoList } from 'TodoList';
import ConnectedTodo, { Todo } from 'Todo';

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
        createdAt: 1234,
        completedAt: undefined,
      },
      {
        id: uuid(),
        text: 'Test item #2',
        completed: false,
        createdAt: 1234,
        completedAt: undefined,
      },
      {
        id: uuid(),
        text: 'Test item #3',
        completed: false,
        createdAt: 1234,
        completedAt: undefined,
      },
    ];

    it('should render the correct number of todos', () => {
      const store = config({ todos });
      const provider = TestUtils.renderIntoDocument(
        <Provider store={store}>
          <ConnectedTodoList />
        </Provider>,
      );
      const todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
      const todoItems = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

      expect(todoItems.length).toBe(todos.length);
    });

    // ??? should I still test it here?
    // it('should render in the correct order', () => {
    //   const todoList = TestUtils.renderIntoDocument(
    //     <TodoList todos={todos} onToggle={handleToggle} />,
    //   );
    //   const el = TestUtils.scryRenderedDOMComponentsWithTag(todoList, 'input');
    //
    //   expect(el[0].id).toBe(todos[0].id);
    //   expect(el[1].id).toBe(todos[1].id);
    //   expect(el[2].id).toBe(todos[2].id);
    // });

    it('should render empty message if no todos', () => {
      const todoList = TestUtils.renderIntoDocument(
        <TodoList todos={[]} />,
      );
      const el = TestUtils.scryRenderedDOMComponentsWithClass(todoList, 'container__message');

      expect(el.length).toBe(1);
    });
  });
});
