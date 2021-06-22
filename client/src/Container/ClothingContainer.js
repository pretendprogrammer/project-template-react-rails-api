import React, { Component } from "react";
import ClothingComponent from "../Component/ClothingComponent";

class ClothingContainer extends Component {
  render() {
    return (
      <div>
        {this.props.clothings.map((clothing) => (
          <ClothingComponent
            parent={"clothingContainer"}
            clothing={clothing}
            key={clothing.id}
            handleDeleteClothing={this.props.handleDeleteClothing}
            {...this.props.routerProps}
          />
        ))}
      </div>
    );
  }
}

export default ClothingContainer;
