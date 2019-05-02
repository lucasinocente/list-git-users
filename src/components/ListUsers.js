import React, { Component } from "react";
import axios from 'axios';
import User from './User';
import { Columns } from 'bloomer';

export default class ListUsers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users`)
    .then(res => {
      const users = res.data
      this.setState({ users })
    })
    .catch(err => {
      console.error({ err })
    })
  }

  removeUser = (id) => {
    const users = this.state.users.filter((user, key) => user.id !== id)
    this.setState({ users })
  }

  render() {
    return (
      <Columns isMobile isMultiline>
        {this.state.users.map((user, key) =>
          <User
            user={user}
            key={key}
            removeUser={this.removeUser}
          />
        )}
      </Columns>
    );
  }
}
