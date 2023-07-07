import React, { Component } from 'react';
import Garage from './Garage';

class Car extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'blue'
    };
  }

  render() {
    const { color } = this.state;
    return (
      <div>
        <h2>This car is {color} {carinfo.model}</h2>
        <Garage size="small" />
      </div>
    );
  }
}

export default Car;
