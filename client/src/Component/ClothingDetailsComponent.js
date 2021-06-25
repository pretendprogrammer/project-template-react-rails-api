import React, { Component } from "react";
import { Container, Header, Button, Card, Image } from 'semantic-ui-react'

class ClothingDetailsComponent extends Component {
  render() {
    console.log(this.props)
    let viewClothing = this.props.routerProps.location.state.viewClothing
    return (
      <Container>
        {viewClothing.name}
        <Image src={viewClothing.image_url} alt={viewClothing.name} />
        <p>{viewClothing.description}</p>
        <p>Brand: {viewClothing.brand}</p>
        <p>Size: {viewClothing.size}</p>
        <p>Category: {viewClothing.category}</p>
        <p>Condition: {viewClothing.condition}</p>
        <p>Color: {viewClothing.color}</p>
        <p>Value: {viewClothing.value}</p>
        {this.props.currentClosetUser.id === this.props.currentUser.id
        ?
        <Button onClick={() => viewClothing.handleDeleteClothing(viewClothing.id)}>
          Delete this piece
        </Button>
        : null
        }
        <Button
        onClick={() => this.props.routerProps.history.goBack()}
        >Go Back</Button>
      </Container>
    );
  }
}

export default ClothingDetailsComponent;
