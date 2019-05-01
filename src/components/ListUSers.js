import React, { Component } from "react";
import axios from 'axios';
import User from './User';

export default class ListUsers extends Component {

  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    // axios.get(`https://api.github.com/users`)
    axios.get(`./users.json`)
    .then(res => {
        const users = res.data
        this.setState({ users })
      })
  }

  removeUser = (user) => {
    const { id } = user
    const users = this.state.users.filter((user, key) => {
      return user.id !== id
    })
    this.setState({ users })
  }

  render() {
    const users = this.state.users.map((user, key) =>
        <li key={user.login} onClick={this.removeUser.bind(this, user)}>
          <User
            name={user.login}/>
        </li>
    )
    return (
      <ul>
        { users }
      </ul>
    )
  }
}




