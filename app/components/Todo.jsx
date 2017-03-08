const React = require('react');

const Todo = React.createClass({

  render() {
    const { text } = this.props;
    return (
      <li>{text}</li>
    );
  },

});

module.exports = Todo;
