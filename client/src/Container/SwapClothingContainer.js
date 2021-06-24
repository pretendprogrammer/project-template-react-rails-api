import React, { Component } from "react";
import ClothingComponent from "../Component/ClothingComponent";

class SwapClothingContainer extends Component {

  componentDidMount() {
    this.props.getUserClothing(this.props.currentUser)
  }
  
  render() {
    return (
      <div>
        {this.props.clothings.map(clothing => <ClothingComponent credits={this.props.credits} reduceCredits={this.props.reduceCredits} parent={"swapClothingContainer"} clothing={clothing} key={clothing.id} {...this.props.routerProps} takeClothing={this.props.takeClothing}/>)}
      </div>
    );
  }
}

export default SwapClothingContainer;
