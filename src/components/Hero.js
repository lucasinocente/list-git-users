import React, { Component } from "react";
import { Container, Hero, HeroBody, Title } from 'bloomer';

export default class ListUsers extends Component {
  render() {
    return (
      <Hero isColor='info' isSize='medium'>
        <HeroBody>
          <Container hasTextAlign='centered'>
            <Title>{this.props.title}</Title>
          </Container>
        </HeroBody>
      </Hero>
    );
  }
}




