const React = require('react');
const { Provider } = require('react-redux');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const uuid = require('node-uuid');

const configureStore = require('configureStore');
const TodoApp = require('TodoApp');
import TodoList from 'TodoList';

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  describe('render', () => {
    it('should render TodoList', () => {
      const store = configureStore.config();
      const provider = TestUtils.renderIntoDocument(
        <Provider store={store}>
          <TodoApp />
        </Provider>,
      );
      const todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
      const todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);

      expect(todoList.length).toBe(1);
    });
  });
});
