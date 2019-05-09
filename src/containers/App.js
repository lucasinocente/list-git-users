import React, { Component } from "react";

import 'bulma/css/bulma.css';
import './App.css';

import Hero from '../components/Hero/Hero';
import Users from '../components/Users/Users';

export default class App extends Component {
  render() {
    return (
      <div>
        <Hero title="Lista de usuários do Github:"/>
        <Users />
      </div>
    );
  }
}
