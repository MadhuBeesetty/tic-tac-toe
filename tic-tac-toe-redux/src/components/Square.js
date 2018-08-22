import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import actions from '../actions/index';
import '../App.css';

class Squares extends Component {

  render() {
    let data = this.props.squares.squares;
    return (
      <div className="bigSquare">
        {data.map(each => 
        <div className="square" key={each.id} onClick={()=>this.props.squareClick(each.id)}>
        {each.symbol}
        </div>
        )
        }
       </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actions,dispatch)
  };

function mapStateToProps(state) {
  return{
      squares: state.squares
  }
  }

  export default connect(mapStateToProps,mapDispatchToProps)(Squares);
