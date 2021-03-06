import React from "react";
import {
  Column, Card, CardContent, Media, MediaLeft,
  Image, MediaContent, Title, Subtitle, Content, Button } from 'bloomer';

const user = (props) => {
    const { login, avatar_url, id, html_url  } = props.user
    return (
      <Column isSize={{mobile: 'full', tablet:"1/3", desktop:"1/3"}}>
        <Card>
          <CardContent>
            <Media>
              <MediaLeft>
                <Image isSize='48x48' src={avatar_url} />
              </MediaLeft>
              <MediaContent>
                <Title isSize={4}>{login}</Title>
                <Subtitle isSize={6}><a href={html_url}>@{login}</a></Subtitle>
              </MediaContent>
            </Media>
            <hr/>
            <Content>
              <Button isColor='danger' isOutlined  onClick={() => props.clicked(id)}>{props.buttonText}</Button>
            </Content>
          </CardContent>
        </Card>
      </Column>
    )
}

export default user