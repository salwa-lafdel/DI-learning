import React, { Component } from 'react';
import Child from './Child'; // Importez le composant Child

class YourComponent extends Component {
  state = {
    counter: 0,
    favoriteColor: 'red',
    show: true, 
  };

  render() {
    const { counter, favoriteColor, show } = this.state;
  
    return (
      <div>
        <h1>Exercice Cycle de Vie React - Phase de Démontage</h1>
        {show && <Child />}
        <div style={{ border: '1px solid gray', padding: '10px' }}>
          <p onClick={() => this.setState({ counter: counter + 1 })}>{favoriteColor}</p>
          <p>Counter: {counter}</p>
        </div>
        <button onClick={() => this.setState({ show: false })}>Supprimer</button> 
      </div>
    );
  }
  
}
