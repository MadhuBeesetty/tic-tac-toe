import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state={
      player1: '',
      player2: '',
      turn: "X",
      board: Array(9).fill('')
    }
  }

  clicked(event){

    if(this.state.board[event.target.dataset.square] === ''){    
      this.state.board[event.target.dataset.square] = this.state.turn; 
      event.target.innerText = this.state.turn;
      this.setState({
        turn: this.state.turn === 'X' ? 'O' : 'X',
        board: this.state.board
      })
    }
    console.log(this.state.board);
  }

  AddPlayer1 = (e) => {
    this.setState({player1:e.target.value})
  }

  AddPlayer2 = (e) => {
    this.setState({player2:e.target.value})
  }

  click = (Player1,Player2) => {
    return (
      <div>
        <h1>hi</h1>
        <p> player 1 is "X" : {Player1} </p>
        <p> player 2 is "O" : {Player2} </p>
      </div>
    )
  }

  render() {
    console.log(this.state);
    return (
      <div id="game">
        <Player AddPlayer1={this.AddPlayer1} AddPlayer2={this.AddPlayer2} click={this.click} Player1={this.state.player1} Player2={this.state.player2} />
        <div id="head">
          <h1>tic-tac-toe-using react</h1>
        </div>
        <div id="board" onClick={(e)=>this.clicked(e)}> 
          <div className="square" data-square="0"></div>
          <div className="square" data-square="1"></div>
          <div className="square" data-square="2"></div>
          <div className="square" data-square="3"></div>
          <div className="square" data-square="4"></div>
          <div className="square" data-square="5"></div>
          <div className="square" data-square="6"></div>
          <div className="square" data-square="7"></div>
          <div className="square" data-square="8"></div>
        </div>
      </div>
    );
  }
}

const Player = ({ AddPlayer1, AddPlayer2, click, Player1, player2 }) => {

  return(
    <div>
      Player1 Name :<input type="text" placeholder="enter name" onChange={AddPlayer1} />
      Player2 Name :<input type="text" placeholder="enter name" onChange={AddPlayer2} />
      <input type="submit" onClick={()=>click(Player1,Player2)} />
    </div>
  )
}

export default App;

