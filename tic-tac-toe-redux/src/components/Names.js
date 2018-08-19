import React, { Component } from 'react';
import {connect} from 'react-redux';

class Names extends Component {

  render() {
    console.log(this.props);
    return (
      <div>
      <p>{this.props.users.Player1.Name}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return{
      users: state.users
  };
  }

export default connect(mapStateToProps)(Names);
