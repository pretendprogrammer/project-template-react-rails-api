import React, { Component } from "react";
import ClothingComponent from "../Component/ClothingComponent";
import { Container, Header, Button, Card } from 'semantic-ui-react'

class ClosetPreviewContainer extends Component {

  componentDidMount() {
    if(this.props.currentUser.id) {
      console.log('closet preview container')
      this.props.getUserClothing(this.props.currentUser)
    }
  }

  render() {
    return (
      <Container className="centered-container content-margin">
        <Header as="h2">Current Styles</Header>
        <Card.Group className="card-content-margin">
        {this.props.clothings.map((clothing) => (
          <ClothingComponent clothing={clothing} key={clothing.id} parent={"closetPreviewContainer"} {...this.props.routerProps}/>
        ))}
        </Card.Group>
        <Button className="form-button" onClick={() =>
          this.props.routerProps.history.push("/closet")
        }>Browse Your Closet</Button>
      </Container>
    );
  }
}

export default ClosetPreviewContainer;
