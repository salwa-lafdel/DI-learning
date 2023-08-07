import React, { Component } from 'react';

class Child extends Component {
  componentWillUnmount() {
    alert('Non monté');
  }

  render() {
    return <h2>Hello World!</h2>;
  }
}

export default Child;
