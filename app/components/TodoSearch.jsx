const React = require('react');

const TodoSearch = React.createClass({
  propTypes: {
    onSearch: React.PropTypes.func.isRequired,
  },
  handleSearch() {
    const searchText = this.searchText.value.toLowerCase();
    const showCompleted = this.showCompleted.checked;
    this.props.onSearch({
      searchText,
      showCompleted,
    });
  },
  render() {
    return (
      <div className="search">
        <input
          type="search"
          placeholder="Search todos"
          ref={(node) => { this.searchText = node; }}
          onChange={this.handleSearch}
        />
        <input
          type="checkbox"
          id="completed"
          ref={(node) => { this.showCompleted = node; }}
          onChange={this.handleSearch}
        />
        <label htmlFor="completed">Show completed todos</label>
      </div>
    );
  },
});

module.exports = TodoSearch;
