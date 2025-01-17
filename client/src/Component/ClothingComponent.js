import React, { Component } from "react";
import ClothingDetailsComponent from "../Component/ClothingDetailsComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container, Header, Button, Card, Image } from 'semantic-ui-react'

class ClothingComponent extends Component {
  state = { 
    viewClothing: {}
  };

  toggleDetails = () => {
    this.setState({ seeDetails: !this.state.seeDetails });
  };

  checkIfInSwap = () => {
    let exists = this.props.clothingsToSwap.find(clothing => clothing.id === this.props.clothing.id)
    return exists ? true : false
  }

  getIndividualClothing = (clothingId) => {
    fetch(`http://localhost:3000/clothings/${clothingId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((clothingItem) => this.setState({ viewClothing: clothingItem }, () => this.props.history.push({pathname: "/clothingDetails",  state: {viewClothing: this.state.viewClothing, parent: this.props.parent}})))
  };

  render() {
    return (
      <Card>
        <Image src={this.props.clothing.image_url} alt={this.props.clothing.name} />
        {this.props.clothing.name}
        {(this.props.parent === "clothingContainer" || this.props.parent === "swapClothingContainer")
        ? <Button
          onClick={() => {
            console.log(this.props.clothing.id)
            this.getIndividualClothing(this.props.clothing.id);
          }}
          > 
            View Details
          </Button>
        : null} 

        {this.props.parent === "swapClosetClothingContainer"
        ? <Button
            onClick={() => this.props.toggleInclusionToSwap(this.props.clothing)}
        >{this.checkIfInSwap() ? 'Remove From Swap' : 'Add to Swap'}</Button>
        : null} 

        {this.props.parent === "swapClothingContainer" 
        ? <Button
        // updates clothing to have user's id
        onClick={() => {
          if (this.props.credits > 0) {
            this.props.takeClothing(this.props.clothing.id)
          } else {
            alert("You don't have any credits left!")
          }
          this.props.reduceCredits()
          console.log('invoked')
        }}
        >Take</Button>
        : null}
      </Card>
    );
  }
}

export default ClothingComponent;
