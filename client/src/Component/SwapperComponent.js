import React, { Component } from "react";

class SwapperComponent extends Component {
  render() {
    return (
      <div>
        {this.props.swapper.username}
      </div>
    )
  }
}

export default SwapperComponent;
