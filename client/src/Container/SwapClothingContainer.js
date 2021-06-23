import React, { Component } from "react";
import ClothingComponent from "../Component/ClothingComponent";

class SwapClothingContainer extends Component {
  render() {
    return (
      <div>
        {this.props.clothings.map(clothing => <ClothingComponent parent={"swapClothingContainer"} clothing={clothing} key={clothing.id} {...this.props.routerProps}/>)}
      </div>
    );
  }
}

export default SwapClothingContainer;
