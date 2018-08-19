import React, { Component } from 'react';
import './App.css';
import Names from './components/Names';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          tic-tac-toe-react-redux
        </p>
        <Names />
      </div>
    );
  }
}

export default App;
