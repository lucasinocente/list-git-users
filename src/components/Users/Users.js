import React from "react";
import User from './User/User';
import { Container, Columns } from 'bloomer';
import './Users.css';

const users = (props) => {
    return (
      <Container>
        <hr/>
        <Columns isMobile isMultiline>
          {props.users.map((user, key) =>
            <User
              user={user}
              key={key}
              clicked={props.removeUser}
              buttonText="Delete User"
            />
          )}
        </Columns>
      </Container>
    )
}

export default users