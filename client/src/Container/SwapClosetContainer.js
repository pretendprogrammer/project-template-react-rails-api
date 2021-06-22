import React, { Component } from "react";
import SwapClosetClothingContainer from "./SwapClosetClothingContainer";

class SwapClosetContainer extends Component {

  componentDidMount() {
    this.props.getUserClothing(this.props.currentUser)
  }

  render() {
    return (
      <div>
        <h1>Swap Your Clothes</h1>
        <SwapClosetClothingContainer clothings={this.props.clothings} routerProps={this.props.routerProps}/>
        <button
        // Three separate fetches, each passes the full array to the backend:
        // create a swapClothing for each clothing item in array with prev_owner_id (POST/CREATE SwapClothing)
        // remove userId from clothing (UPDATE clothing)
        // create a swapUser for the user and the swap with credits (POST/CREATE SwapUser)
        // push back to home page
        >Submit</button>
      </div>
    );
  }
}

export default SwapClosetContainer;
