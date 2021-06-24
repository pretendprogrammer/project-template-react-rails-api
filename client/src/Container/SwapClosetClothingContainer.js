import React, { Component } from "react";
import ClothingComponent from "../Component/ClothingComponent";

class SwapClosetClothingContainer extends Component {

  componentDidMount() {
    this.props.getUserClothing(this.props.currentUser)
  }
  
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

export default SwapClosetClothingContainer;
