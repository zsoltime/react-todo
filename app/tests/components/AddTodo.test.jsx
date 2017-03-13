import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';

import { AddTodo } from 'AddTodo';
import * as actions from 'actions';

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });
  it('should dispatch ADD_TODO with valid data', () => {
    const todoText = 'Check mail';
    const action = actions.startAddTodo(todoText);
    const spy = expect.createSpy();
    const addTodo = TestUtils.renderIntoDocument(
      <AddTodo dispatch={spy} />,
    );
    const form = TestUtils.findRenderedDOMComponentWithTag(addTodo, 'form');
    addTodo.task.value = todoText;
    TestUtils.Simulate.submit(form);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should not dispatch ADD_TODO with invalid data', () => {
    const todoText = '';
    const spy = expect.createSpy();
    const addTodo = TestUtils.renderIntoDocument(
      <AddTodo dispatch={spy} />,
    );
    const form = TestUtils.findRenderedDOMComponentWithTag(addTodo, 'form');
    addTodo.task.value = todoText;
    TestUtils.Simulate.submit(form);

    expect(spy).toNotHaveBeenCalled();
  });
});
