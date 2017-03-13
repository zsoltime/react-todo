const React = require('react');
const { connect } = require('react-redux');
const actions = require('actions');

export const AddTodo = React.createClass({
  propTypes: {
    dispatch: React.PropTypes.func.isRequired,
  },
  handleSubmit(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    const task = this.task.value;
    if (task.length > 0) {
      dispatch(actions.startAddTodo(task));
      this.task.value = '';
    } else {
      this.task.focus();
    }
  },
  render() {
    return (
      <div className="todoapp__footer">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            ref={(node) => { this.task = node; }}
            placeholder="What do you need to do?"
          />
          <button className="button expanded">
            Add todo
          </button>
        </form>
      </div>
    );
  },
});

export default connect()(AddTodo);
