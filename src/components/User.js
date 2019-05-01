import React, { Component } from "react";

export default class User extends Component {
  render() {
    return (
      <div>
        <p>Usuário: { this.props.name } </p>
      </div>
    );
  }
}