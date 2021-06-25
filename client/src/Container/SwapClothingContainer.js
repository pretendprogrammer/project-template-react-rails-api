import React, { Component } from "react";
import ClothingComponent from "../Component/ClothingComponent";
import { Container, Header, Button, Card } from 'semantic-ui-react'

class SwapClothingContainer extends Component {

  componentDidMount() {
    console.log("swap clothing container")
    this.props.getUserClothing(this.props.currentUser)
  }
  
  render() {
    return (
      <Card.Group>
        {this.props.clothings.map(clothing => <ClothingComponent credits={this.props.credits} reduceCredits={this.props.reduceCredits} parent={"swapClothingContainer"} clothing={clothing} key={clothing.id} {...this.props.routerProps} takeClothing={this.props.takeClothing}/>)}
      </Card.Group>
    );
  }
}

export default SwapClothingContainer;
