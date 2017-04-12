import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import * as actions from 'actions';

export class TodoSearch extends Component {
  render() {
    const { dispatch, showCompleted, searchText } = this.props;
    return (
      <div className="todoapp__filter">
        <input
          type="search"
          placeholder="Search todos"
          ref={(node) => { this.searchTextInput = node; }}
          value={searchText}
          onChange={() => {
            dispatch(actions.setSearchText(this.searchTextInput.value));
          }}
        />
        <div className="todoapp__completed">
          <input
            type="checkbox"
            id="completed"
            ref={(node) => { this.showCompletedInput = node; }}
            value={showCompleted}
            onChange={() => dispatch(actions.toggleShowCompleted())}
          />
          <label htmlFor="completed">Show completed todos</label>
        </div>
      </div>
    );
  }
}

TodoSearch.propTypes = {
  dispatch: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
  showCompleted: PropTypes.bool.isRequired,
};

export default connect(
  state => ({
    showCompleted: state.showCompleted,
    searchText: state.searchText,
  }),
)(TodoSearch);
