import React, { Component } from 'react';

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true
    };
  }

  clickMe = () => {
    alert("J'ai été cliqué");
  }

  handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      const value = event.target.value;
      alert(`La touche Entrée a été enfoncée avec la valeur de texte saisie : ${value}`);
    }
  }

  toggleState = () => {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    const { isToggleOn } = this.state;
    return (
      <div>
        <button onClick={this.clickMe}>Cliquez-moi</button>
        <br />
        <input type="text" onKeyDown={this.handleKeyDown} />
        <br />
        <button onClick={this.toggleState}>{isToggleOn ? 'ON' : 'OFF'}</button>
      </div>
    );
  }
}

export default Events;
