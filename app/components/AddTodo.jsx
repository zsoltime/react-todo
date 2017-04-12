import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

export class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
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
  }
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
  }
}

AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(AddTodo);
