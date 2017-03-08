const React = require('react');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');

const TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  });

  describe('filter', () => {
    it('should call onSearch with entered inpute text', () => {
      const searchText = 'walk';
      const spy = expect.createSpy();
      const todoSearch = TestUtils.renderIntoDocument(
        <TodoSearch onSearch={spy} />,
      );
      todoSearch.searchText.value = searchText;
      TestUtils.Simulate.change(todoSearch.searchText);

      expect(spy).toHaveBeenCalledWith({
        searchText,
        showCompleted: false,
      });
    });

    it('should call on search with proper checked value', () => {
      const spy = expect.createSpy();
      const todoSearch = TestUtils.renderIntoDocument(
        <TodoSearch onSearch={spy} />,
      );
      todoSearch.showCompleted.checked = true;
      TestUtils.Simulate.change(todoSearch.showCompleted);

      expect(spy).toHaveBeenCalledWith({
        searchText: '',
        showCompleted: true,
      });
    });
  });
});
