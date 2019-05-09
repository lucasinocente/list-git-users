import React from "react";
import { Container, Hero, HeroBody, Title } from 'bloomer';

const hero = (props) => {
    return (
      <Hero isColor='info' isSize='medium'>
        <HeroBody>
          <Container hasTextAlign='centered'>
            <Title>{props.title}</Title>
          </Container>
        </HeroBody>
      </Hero>
    )
}

export default hero