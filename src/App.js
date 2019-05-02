import React, { Component } from "react";

import 'bulma/css/bulma.css';
import './App.css';
import { Container } from 'bloomer';

import HeroSection from './components/Hero';
import ListUsers from './components/ListUsers';

export default class App extends Component {
  render() {
    return (
      <div>
        <HeroSection title="Lista de usuários do Github:"/>
        <Container>
          <hr/>
          <ListUsers />
        </Container>
      </div>
    );
  }
}
