import React, { Component } from "react";
import SwapClothingContainer from "./SwapClothingContainer";
import SwapperListContainer from "../Container/SwapperListContainer";

class HomePageContainer extends Component {
  render() {
    return (
      <div>
        <h1>Clothing Swap</h1>
        <h5>Credits</h5>
        <SwapClothingContainer />
        <SwapperListContainer />
      </div>
    );
  }
}

export default HomePageContainer;
