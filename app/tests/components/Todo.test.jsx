const React = require('react');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const uuid = require('node-uuid');

const { Todo } = require('Todo');

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });

  // describe('render', () => {
  //   it('should render a todo item', () => {
  //     const props = {
  //       id: '1',
  //       text: 'write unit tests',
  //       completed: false,
  //       createdAt: new Date().getTime(),
  //       completedAt: undefined,
  //     };
  //     const todo = TestUtils.renderIntoDocument(<Todo {...props} />);
  //     const el = TestUtils.findRenderedDOMComponentWithTag(todo, 'li');
  //
  //     expect(el.innerText).toBe('write unit tests');
  //   });
  // });

  describe('toggle', () => {
    it('should dispatch TOGGLE_TODO action on click', () => {
      const id = uuid();
      const task = {
        id,
        text: 'write unit tests',
        completed: false,
        createdAt: new Date().getTime(),
        completedAt: undefined,
      };
      const spy = expect.createSpy();
      const todo = TestUtils.renderIntoDocument(
        <Todo {...task} dispatch={spy} />,
      );
      const el = TestUtils.findRenderedDOMComponentWithTag(todo, 'input');

      TestUtils.Simulate.change(el);

      expect(spy).toHaveBeenCalledWith({
        type: 'TOGGLE_TODO',
        id: task.id,
      });
    });
  });
});
