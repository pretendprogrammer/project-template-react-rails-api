import React, { Component } from "react";
import { Container, Header, Button, Image } from 'semantic-ui-react'

class ProfileComponent extends Component {
  render() {
      return (
      <Container className="centered-container">
        <Header  style={{ backgroundColor: this.props.spirit_color }} as='h1'>{this.props.username}</Header>
        <Image centered src={this.props.image_url} alt="" />
        <Header as="h3">About Me:</Header>
        <Container text>{this.props.bio}</Container>
        {/* <Container style={{ backgroundColor: this.props.spirit_color }}>spirit</Container> */}
      </Container>
    );
  }
}

export default ProfileComponent;
