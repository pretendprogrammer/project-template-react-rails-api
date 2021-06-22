import React, { Component } from "react";
import ClothingComponent from "../Component/ClothingComponent";

class ClothingContainer extends Component {
  render() {
    return (
      <div>
        {/* {this.props.swapClothings.map(clothing => <ClothingComponent parent={"swapClosetClothingContainer"} {...clothing} key={clothing.id} />)} */}
      </div>
    );
  }
}

export default ClothingContainer;
