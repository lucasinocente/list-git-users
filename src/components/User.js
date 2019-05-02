import React, { Component } from "react";

export default class User extends Component {
  render() {
    return (
      <li onClick={this.props.removeUser.bind(this, this.props)}>
        <p>Usuário: { this.props.name } </p>
      </li>
    );
  }
}