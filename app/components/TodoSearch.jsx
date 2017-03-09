const React = require('react');

const TodoSearch = React.createClass({
  propTypes: {
    onSearch: React.PropTypes.func.isRequired,
  },
  handleSearch() {
    const searchText = this.searchText.value;
    const showCompleted = this.showCompleted.checked;
    this.props.onSearch({
      searchText,
      showCompleted,
    });
  },
  render() {
    return (
      <div className="todoapp__filter">
        <input
          type="search"
          placeholder="Search todos"
          ref={(node) => { this.searchText = node; }}
          onChange={this.handleSearch}
        />
      <div className="todoapp__completed">
          <input
            type="checkbox"
            id="completed"
            ref={(node) => { this.showCompleted = node; }}
            onChange={this.handleSearch}
          />
          <label htmlFor="completed">Show completed todos</label>
        </div>
      </div>
    );
  },
});

module.exports = TodoSearch;
