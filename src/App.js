import React, { Component } from "react";
import axios from 'axios';

import ListUsers from './components/ListUSers';
import './App.css';

export default class App extends Component {
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
    return (
      <div className="App">
        <ListUsers users={this.state.users} removeUser={this.removeUser} />
      </div>
    )
  }
}
