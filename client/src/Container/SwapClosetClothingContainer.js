import React, { Component } from "react";
import ClothingComponent from "../Component/ClothingComponent";
import { Container, Header, Button, Card } from 'semantic-ui-react'

class SwapClosetClothingContainer extends Component {

  componentDidMount() {
    console.log("swapClosetClothingContainer")
    this.props.getUserClothing(this.props.currentUser)
  }
  
  render() {
    return (
      <Card.Group>
        {this.props.clothings.map(clothing => <ClothingComponent
                                                  parent={"swapClosetClothingContainer"}
                                                  clothing={clothing} key={clothing.id}
                                                  toggleInclusionToSwap={this.props.toggleInclusionToSwap}
                                                  clothingsToSwap={this.props.clothingsToSwap}
                                                  {...this.props.routerProps}/>)}
      </Card.Group>
    );
  }
}

export default SwapClosetClothingContainer;
