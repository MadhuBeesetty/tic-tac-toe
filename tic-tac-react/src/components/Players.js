import React, { Component } from 'react';

class Player extends Component {
  
render() {
return(
  <div>
    <div>
    Player 1 Name "X" :<input type="text" placeholder="Player1" name="player1" onChange={this.props.changePlayer} />
    </div>
    <div>
    Player 2 Name "O" :<input type="text" placeholder="Player2" name="player2" onChange={this.props.changePlayer} />
    </div>
    </div>
      )
    }
}

export default Player;