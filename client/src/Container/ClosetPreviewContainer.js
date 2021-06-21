import React, { Component } from "react";
import ClothingComponent from "../Component/ClothingComponent";

class ClosetPreviewContainer extends Component {
  render() {
    return (
      <div>
        {this.props.clothings.map((clothing) => (
          <ClothingComponent clothing={clothing} key={clothing.id} />
        ))}
      </div>
    );
  }
}

export default ClosetPreviewContainer;
