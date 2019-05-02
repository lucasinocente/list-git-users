import React, { Component } from "react";
import User from './User';

export default class ListUsers extends Component {
  render() {
    return (
      <ul>
        {this.props.users.map((user, key) =>
          <User name={user.login} id={user.id} key={key} removeUser={this.props.removeUser}/>
        )}
      </ul>
    )
  }
}




