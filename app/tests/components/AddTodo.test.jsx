const React = require('react');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');

const AddTodo = require('AddTodo');

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  describe('onAddTodo', () => {
    it('should call onAddTodo prop with valid data', () => {
      const todoText = 'Check mail';
      const spy = expect.createSpy();
      const addTodo = TestUtils.renderIntoDocument(
        <AddTodo onAddTodo={spy} />,
      );
      const form = TestUtils.findRenderedDOMComponentWithTag(addTodo, 'form');
      addTodo.task.value = todoText;
      TestUtils.Simulate.submit(form);

      expect(spy).toHaveBeenCalledWith(todoText);
    });

    it('should not call onAddTodo prop with invalid data', () => {
      const todoText = '';
      const spy = expect.createSpy();
      const addTodo = TestUtils.renderIntoDocument(
        <AddTodo onAddTodo={spy} />,
      );
      const form = TestUtils.findRenderedDOMComponentWithTag(addTodo, 'form');
      addTodo.task.value = todoText;
      TestUtils.Simulate.submit(form);

      expect(spy).toNotHaveBeenCalled();
    });
  });
});
