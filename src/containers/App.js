import React, { Component } from "react";
import axios from 'axios';

import 'bulma/css/bulma.css';

import Hero from '../components/Hero/Hero';
import Users from '../components/Users/Users';

export default class App extends Component {

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
      <div>
        <Hero title="Lista de usuários do Github:"/>
        <Users users={this.state.users} removeUser={this.removeUser}/>
      </div>
    );
  }
}
