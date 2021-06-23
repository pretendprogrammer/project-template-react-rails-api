
import React, { Component } from "react";
import SwapClothingContainer from "./SwapClothingContainer";
import SwapperListContainer from "../Container/SwapperListContainer";

class SwapContainer extends Component {

  constructor() {
    super()
    this.state = {
      clothings: [],
      swappers: [],
      swapClothings: []
    }
  }

  componentDidMount() {
    fetch(`http://localhost:3000/swaps/${this.props.currentSwap.id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json",
      }
    })
    .then(res => res.json())
    .then(swapObj => this.setState({
      clothings: swapObj.clothings,
      swappers: swapObj.users,
      swapClothings: swapObj.swap_clothings
    }))
  }

  startCredits = () => {
    let currentUsersSwaps = this.state.swapClothings.filter(swapClothing => swapClothing.prev_ower_id === this.props.currentUser.id)
    let credits = currentUsersSwaps.length
    return credits
  }

  render() {
    return (
      <div>
        <h1>Clothing Swap</h1>
        <h5>Credits: {this.startCredits()}</h5>
        <SwapClothingContainer clothings={this.state.clothings} routerProps={this.props.routerProps}/>
        <SwapperListContainer swappers={this.state.swappers}/>
      </div>
    );
  }
}

export default SwapContainer;
