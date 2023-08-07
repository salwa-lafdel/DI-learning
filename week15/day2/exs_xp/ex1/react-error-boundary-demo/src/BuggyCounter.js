import React, { Component } from 'react';

class BuggyCounter extends Component {
  state = {
    counter: 0,
  };

  handleClick = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }));

    if (this.state.counter === 4) {
      throw new Error("J'ai planté !");
    }
  };

  render() {
    return <div onClick={this.handleClick}>{this.state.counter}</div>;
  }
}

export default BuggyCounter;
