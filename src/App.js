import React, { Component } from 'react';

import './App.css';

import HolaMundo from './components/HolaMundo';
import Contador from './components/Contador';

class App extends Component {
  borrar(saludo){
    console.log('estamos aqui');
    console.log(saludo);
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <HolaMundo/>
          <Contador borrarme={(saludo) => this.borrar(saludo)}/>
        </header>
      </div>
    );
  }
}

export default App;
