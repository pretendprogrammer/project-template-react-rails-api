import React, { Component } from "react";

class SwapperComponent extends Component {
  render() {
    return (
      <p>
        {this.props.swapper.username}
      </p>
    )
  }
}

export default SwapperComponent;
