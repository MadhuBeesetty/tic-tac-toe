import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import actions from '../actions/index';

class Names extends Component {

  render() {
    console.log(this.props);
    return (
      <div>
        <div>
        Player one: <input type="text" ref="name1" placeholder="enter player 1 name" />
        <button type="submit" onClick={()=>this.props.addName(this.refs.name1.value)}>Add Name</button>
        </div>
        <div>
        Player two: <input type="text" ref="name2" placeholder="enter player 2 name" />
        <button type="submit" onClick={()=>this.props.addName2(this.refs.name2.value)}>Add Name</button>
      </div>
      
      <p>{this.props.users.Player1.Name}</p>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
return bindActionCreators(actions,dispatch)
};

function mapStateToProps(state) {
  return{
      users: state.users,
  }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Names);
