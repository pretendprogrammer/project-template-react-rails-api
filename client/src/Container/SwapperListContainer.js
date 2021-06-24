import React, { Component } from "react";
import SwapperComponent from "../Component/SwapperComponent";

class SwapperListContainer extends Component {
  render() {
    return (
      <div>
        <h4>Participating Swappers</h4>
        {this.props.swappers.map(swapper => <SwapperComponent swapper={swapper} key={swapper.id} />)}
      </div>
    );
  }
}

export default SwapperListContainer;
