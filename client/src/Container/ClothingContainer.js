import React, { Component } from "react";
import ClothingComponent from "../Component/ClothingComponent";

class ClothingContainer extends Component {

  // not passing an argument here!!!!
  // should pass this.props.currentClosetUser
  componentDidMount() {
    this.props.getUserClothing(this.props.currentClosetUser)
  }

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
