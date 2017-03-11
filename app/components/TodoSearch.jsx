const React = require('react');
const { connect } = require('react-redux');
const actions = require('actions');

export const TodoSearch = React.createClass({
  render() {
    const { dispatch, showCompleted, searchText } = this.props;
    return (
      <div className="todoapp__filter">
        <input
          type="search"
          placeholder="Search todos"
          ref={(node) => { this.searchText = node; }}
          value={searchText}
          onChange={() => {
            dispatch(actions.setSearchText(this.searchText.value));
          }}
        />
        <div className="todoapp__completed">
          <input
            type="checkbox"
            id="completed"
            ref={(node) => { this.showCompleted = node; }}
            value={showCompleted}
            onChange={() => dispatch(actions.toggleShowCompleted())}
          />
          <label htmlFor="completed">Show completed todos</label>
        </div>
      </div>
    );
  },
});

export default connect(
  (state) => {
    return {
      showCompleted: state.showCompleted,
      searchText: state.searchText,
    };
  },
)(TodoSearch);
