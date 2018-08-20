import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import squareClick from '../actions/index';
import '../App.css';

class Squares extends Component {

  render() {
    console.log(this.props.squares);
    let data = this.props.squares.squares;
    console.log(data,'i am data');
    return (
      <div className="bigSquare">
        {data.map(each => 
        <div className="square" key={each.id} onClick={()=>this.props.squareClick(each.id)} >
        {each.id}
        </div>
        )
        }
            </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({squareClick},dispatch)
  };

function mapStateToProps(state) {
  return{
      squares: state.squares
  }
  }

  export default connect(mapStateToProps,mapDispatchToProps)(Squares);