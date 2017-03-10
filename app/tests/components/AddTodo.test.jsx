const React = require('react');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');

const { AddTodo } = require('AddTodo');

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });
  it('should dispatch ADD_TODO with valid data', () => {
    const todoText = 'Check mail';
    const action = {
      type: 'ADD_TODO',
      text: todoText,
    };
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
