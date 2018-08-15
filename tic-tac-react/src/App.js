import React, { Component } from 'react';
import './App.css';

import Player from './components/Players';

class App extends Component {

  constructor(){
    super();
    this.state={
      player1: '',
      player2: '',
      turn: "X",
      board: Array(9).fill(''),
      winner: ''
    };

    this.changePlayer = this.changePlayer.bind(this);
    this.fun = this.fun.bind(this);
  }

  changePlayer(e) {
    console.log(e.target.name);
    this.setState({[e.target.name]: e.target.value})
  }

  fun() {
    if(this.state.winner !== ''){
      var name = '';
      var name2 ='';
      if(this.state.winner === 'X'){
        name=this.state.player1;
        name2=this.state.player2;
      }else{
        name=this.state.player2;
        name2=this.state.player1;
      }
      return(
        <div>
        <p className="winner">the winner is {name}</p>
        <p className="winner">{name2} get a life </p>
        </div>
      )
    }
  };

  clicked(event){

    if(this.state.winner === ''){
    if(this.state.board[event.target.dataset.square] === ''){    
      this.state.board[event.target.dataset.square] = this.state.turn; 
      event.target.innerText = this.state.turn;
      this.setState({
        turn: this.state.turn === 'X' ? 'O' : 'X',
        board: this.state.board
      })
      var arr = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
      for(var i = 0; i< arr.length; i++){
        if(this.state.board[arr[i][0]] === this.state.board[arr[i][1]] && this.state.board[arr[i][1]] === this.state.board[arr[i][2]]){
          this.setState({
            winner: this.state.board[arr[i][0]]
          })
        }
      }
    }
    console.log(this.state.board);
  }
}

  render() {
    console.log(this.state);
    return (
      <div id="game">
      <Player Player1={this.state.player1} Player2={this.state.player2} changePlayer={this.changePlayer} />
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
        <div>
        {this.fun()}
        </div>
      </div>
    );
  }
}

export default App;
