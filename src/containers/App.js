import React, { Component } from "react";
import axios from 'axios';
import { connect } from 'react-redux'

import 'bulma/css/bulma.css';

import Hero from '../components/Hero/Hero';
import Users from '../components/Users/Users';

class App extends Component {

  componentDidMount() {
    axios.get(`https://api.github.com/users`)
    .then(res => {
      const users = res.data
      this.props.onUserListLoaded(users)
    })
    .catch(err => {
      console.error({ err })
    })
  }

  render() {
    return (
      <div>
        <Hero title="Lista de usuários do Github:"/>
        <Users users={this.props.usrs} removeUser={this.props.onUserRemoved}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    usrs: state.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onUserRemoved: (userId) => dispatch({
      type: 'REMOVE_USER',
      userId
    }),
    onUserListLoaded: (users) => dispatch({
      type: 'LOAD_USER_LIST',
      users
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)