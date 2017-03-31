import React, { Component, PropTypes } from 'react';

// Task component - represents a single todo item
export default class Comment extends Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

Comment.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
};
