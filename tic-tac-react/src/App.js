import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  constructor(){
    super();
    this.state={
    turn: "X"
    }
  }

  clicked(event){
    event.target.innerText = this.state.turn;
    this.setState({
     turn: this.state.turn == 'X' ? 'O' : 'X'
    })
  }

  render() {
    return (
      <div id="game">
        <div id="head">
          <h1>tic-tac-toe-using react</h1>
      </div>
      <div id="board" onClick={(e)=>this.clicked(e)}> 
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
        </div>
      </div>
    );
  }
}

export default App;
