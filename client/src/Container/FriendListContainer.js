import React, { Component } from "react";
import FriendComponent from "../Component/FriendComponent";
import { Container, Card, Header } from 'semantic-ui-react'


class FriendListContainer extends Component {
  render() {
    return (
      <Container className="centered-container content-margin">
        <Header as="h2" >Get Some Style Inspiration</Header>
        <Card.Group itemsPerRow={3} className="card-content-margin">
          {this.props.friends.map((friend) => <FriendComponent friend={friend} key={friend.id} getUserClothing={this.props.getUserClothing} {...this.props.routerProps} currentClosetUser={this.props.currentClosetUser}/>
          )}
        </Card.Group>
      </Container>
    );
  }
}

export default FriendListContainer;
