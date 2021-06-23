import React, { Component } from "react";
import ClothingComponent from "../Component/ClothingComponent";

class ClothingContainer extends Component {
  render() {
    return (
      <div>
        {this.props.clothings.map(clothing => <ClothingComponent
                                                  parent={"swapClosetClothingContainer"}
                                                  clothing={clothing} key={clothing.id}
                                                  toggleInclusionToSwap={this.props.toggleInclusionToSwap}
                                                  clothingsToSwap={this.props.clothingsToSwap}
                                                  {...this.props.routerProps}/>)}
      </div>
    );
  }
}

export default ClothingContainer;
