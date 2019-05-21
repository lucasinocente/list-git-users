import React, { Component } from "react";
import { Container, Hero, HeroBody, Title, Subtitle, Button } from 'bloomer';

import { connect } from 'react-redux'

class HeroComponent extends Component {
  render() {
    return (
      <Hero isColor='info' isSize='medium'>
        <HeroBody>
          <Container hasTextAlign='centered'>
            <Title>{this.props.title}</Title>
            <Subtitle>Total users: {Object.keys(this.props.usrs).length}</Subtitle>
          </Container>
        </HeroBody>
      </Hero>
    )
  }
}

const mapStateToProps = state => {
  return {
    usrs: state.users
  }
}

export default connect(mapStateToProps, null)(HeroComponent)