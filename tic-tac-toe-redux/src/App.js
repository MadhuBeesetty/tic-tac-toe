import React, { Component } from 'react';
import './App.css';
import Names from './components/Names';

class App extends Component {
  render() {
    return (
      <div>
        <p>
          tic-tac-toe-react-redux
        </p>
        <Names />
      </div>
    );
  }
};

export default App;
