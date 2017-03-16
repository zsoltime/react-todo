import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import uuid from 'node-uuid';

import * as actions from 'actions';
import { Todo } from 'Todo';

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
      const action = actions.startToggleTodo(task.id, !task.completed);

      const spy = expect.createSpy();
      const todo = TestUtils.renderIntoDocument(
        <Todo {...task} dispatch={spy} />,
      );
      const el = TestUtils.findRenderedDOMComponentWithTag(todo, 'input');

      TestUtils.Simulate.change(el);

      expect(spy).toHaveBeenCalledWith(action);
    });
  });
});
