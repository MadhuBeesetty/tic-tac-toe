import React, { Component } from 'react';
import './App.css';
import Names from './components/Names';
import Square from './components/Square';

class App extends Component {
  render() {
    return (
      <div>
        <p>
          tic-tac-toe-react-redux
        </p>
        <div>
        <Names />
        </div>
        <div>
          <Square />
          </div>
      </div>
    );
  }
};

export default App;
