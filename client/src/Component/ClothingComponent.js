import React, { Component } from "react";
import ClothingDetailsComponent from "../Component/ClothingDetailsComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class ClothingComponent extends Component {
  state = { 
    viewClothing: {},
    swapped: ""
  };

  toggleDetails = () => {
    this.setState({ seeDetails: !this.state.seeDetails });
  };

  swapped = () => {
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
      <div>
        <img src={this.props.clothing.image_url} alt={this.props.clothing.name} />
        {this.props.clothing.name}
        {this.props.parent === "clothingContainer" ?
          <button
          onClick={() => {
            console.log(this.props.clothing.id)
            this.getIndividualClothing(this.props.clothing.id);
          }}
          > 
            View Details
          </button>
        : this.props.parent === "swapClosetClothingContainer"
        ? <button
            onClick={() => this.props.toggleInclusionToSwap(this.props.clothing)}
        >{this.swapped() ? 'Remove From Swap' : 'Add to Swap'}</button>
        : this.props.parent === "swapClothingContainer" 
        ? <button
        // updates clothing to have user's id
        // removes 1 from credits
        >Take</button>
        : null}
      </div>
    );
  }
}

export default ClothingComponent;
