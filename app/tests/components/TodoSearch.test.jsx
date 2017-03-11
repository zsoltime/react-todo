const React = require('react');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');

// const TodoSearch = require('TodoSearch');
import { TodoSearch } from 'TodoSearch';

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  });

  describe('filter', () => {
    it('should dispatch SET_SEARCH_TEXT on input change', () => {
      const searchText = 'walk';
      const action = {
        type: 'SET_SEARCH_TEXT',
        searchText,
      };
      const spy = expect.createSpy();
      const todoSearch = TestUtils.renderIntoDocument(
        <TodoSearch dispatch={spy} />,
      );
      todoSearch.searchText.value = searchText;
      console.log(todoSearch);
      TestUtils.Simulate.change(todoSearch.searchText);
      console.log(todoSearch);

      expect(spy).toHaveBeenCalledWith(action);
    });

    it('should dispatch TOGGLE_SHOW_COMPLETED when checkbox checked', () => {
      const action = {
        type: 'TOGGLE_SHOW_COMPLETED',
      };
      const spy = expect.createSpy();
      const todoSearch = TestUtils.renderIntoDocument(
        <TodoSearch dispatch={spy} />,
      );
      todoSearch.showCompleted.checked = true;
      TestUtils.Simulate.change(todoSearch.showCompleted);

      expect(spy).toHaveBeenCalledWith(action);
    });
  });
});
