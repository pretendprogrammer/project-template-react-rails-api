import React, { Component } from "react";
import AddClothingFormComponent from "../Component/AddClothingFormComponent";
import ClothingContainer from "./ClothingContainer";

class ClosetContainer extends Component {
  constructor() {
    super();
    this.state = {
      user: true,
    };
  }

  render() {
    return (
      <div>
        <h1>Closet</h1>
        <ClothingContainer />
        {this.state.user ? <AddClothingFormComponent /> : null}
      </div>
    );
  }
}

export default ClosetContainer;
