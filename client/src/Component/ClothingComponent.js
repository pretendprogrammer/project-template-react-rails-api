import React, { Component } from "react";

class ClothingComponent extends Component {
  render() {
    return <div>{this.props.clothing.name}</div>;
  }
}

export default ClothingComponent;
