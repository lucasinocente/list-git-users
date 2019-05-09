import React, { Component } from "react";
import User from './User/User';
import { Container, Columns } from 'bloomer';

export default class ListUsers extends Component {
  render() {
    return (
      <Container>
        <hr/>
        <Columns isMobile isMultiline>
          {this.props.users.map((user, key) =>
            <User
              user={user}
              key={key}
              clicked={this.props.removeUser}
              buttonText="Delete User"
            />
          )}
        </Columns>
      </Container>
    );
  }
}
