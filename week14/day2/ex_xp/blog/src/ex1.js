import React from 'react';
import ReactDOM from 'react-dom';


const App = () => {
  // Création de l'élément h1 sans JSX
  const h1Element = React.createElement('h1', null, "Je n'utilise pas JSX");


  return h1Element;
};
export default App;

// Montage dans la racine de l'application
ReactDOM.render(<App />, document.getElementById('root'));









