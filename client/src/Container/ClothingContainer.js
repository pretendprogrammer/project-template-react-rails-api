import React, { Component } from "react";
import ClothingComponent from "../Component/ClothingComponent";

class ClothingContainer extends Component {
  render() {
    return (
      <div>
        {this.props.clothings.map(clothing => <ClothingComponent parent={"clothingContainer"} clothing={clothing} key={clothing.id} handleDeleteClothing={this.props.handleDeleteClothing}/>)}
      </div>
    );
  }
}

export default ClothingContainer;
