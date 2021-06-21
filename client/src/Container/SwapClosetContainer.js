import React, { Component } from "react";
import SwapClosetClothingContainer from "./SwapClosetClothingContainer";

class SwapClosetContainer extends Component {
  render() {
    return (
      <div>
        <h1>Swap Your Clothes</h1>
        <SwapClosetClothingContainer />
        <button>Submit</button>
      </div>
    );
  }
}

export default SwapClosetContainer;
