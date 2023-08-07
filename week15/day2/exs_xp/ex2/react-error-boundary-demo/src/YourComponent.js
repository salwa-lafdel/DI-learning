import React, { Component } from 'react';

class YourComponent extends Component {
  state = {
    counter: 0,
    favoriteColor: 'red',
  };

  componentDidMount() {
    // Partie I: shouldComponentUpdate
    // Utilisation de shouldComponentUpdate pour empêcher la mise à jour du composant
    // lorsqu'on essaye de changer la couleur favorite en "blue"
    setTimeout(() => {
      this.setState({ favoriteColor: 'blue' });
    }, 2000);
  }

  componentDidUpdate() {
    // Partie II: componentDidUpdate
    console.log('after update');
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // Partie III: getSnapshotBeforeUpdate
    console.log('in getSnapshotBeforeUpdate');
    return null;
  }

  render() {
    const { counter, favoriteColor } = this.state;

    return (
      <div>
        <h1>Exercice Cycle de Vie React</h1>
        <h2>Partie I: shouldComponentUpdate</h2>
        <div style={{ border: '1px solid gray', padding: '10px' }}>
          <p onClick={() => this.setState({ counter: counter + 1 })}>{favoriteColor}</p>
          <p>Counter: {counter}</p>
        </div>

        <h2>Partie II: componentDidUpdate</h2>
        <div style={{ border: '1px solid gray', padding: '10px' }}>
          <p>{favoriteColor}</p>
        </div>

        <h2>Partie III: getSnapshotBeforeUpdate</h2>
        <div style={{ border: '1px solid gray', padding: '10px' }}>
          <p>{favoriteColor}</p>
        </div>
      </div>
    );
  }
}

export default YourComponent;
