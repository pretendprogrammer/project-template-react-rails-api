import React, { Component } from "react";
import ClothingContainer from "./ClothingContainer";

class SwapClosetContainer extends Component {
  render() {
    return (
      <div>
        <h1>Swap Your Clothes</h1>
        <ClothingContainer />
        <button>Submit</button>
      </div>
    );
  }
}

export default SwapClosetContainer;
