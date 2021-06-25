import React, { Component } from "react";
import ClothingComponent from "../Component/ClothingComponent";
import { Container, Header, Button, Card } from 'semantic-ui-react'

class ClothingContainer extends Component {

  // componentDidMount() {
  //   console.log("clothing container")
  //   this.props.getUserClothing(this.props.currentClosetUser)
  // }

  render() {
    return (
      <Card.Group>
        {this.props.clothings.map((clothing) => (
          <ClothingComponent
            parent={"clothingContainer"}
            clothing={clothing}
            key={clothing.id}
            handleDeleteClothing={this.props.handleDeleteClothing}
            {...this.props.routerProps}
          />
        ))}
      </Card.Group>
    );
  }
}

export default ClothingContainer;
