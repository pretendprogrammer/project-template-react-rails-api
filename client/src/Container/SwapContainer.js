
import React, { Component } from "react";
import SwapClothingContainer from "./SwapClothingContainer";
import SwapperListContainer from "../Container/SwapperListContainer";

class SwapContainer extends Component {

  constructor() {
    super()
    this.state = {
      clothings: [],
      swappers: [],
      swapClothings: [],
      currentSwapUser: {},
      swapUsers: []
    }
  }

  reduceCredits = () => {
    if(this.state.currentSwapUser.credits > 0) {
      let patchConfig = {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({credits: this.state.currentSwapUser.credits - 1})
      }
      fetch(`http://localhost:3000/swap_users/${this.state.currentSwapUser.id}`, patchConfig)
        .then(res => res.json())
        .then(result => {
          if (!result.error) {
            this.setState({currentSwapUser: result})
          }
        })
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
    .then(swapObj => {this.setState({
      clothings: swapObj.clothings,
      swappers: swapObj.users,
      swapClothings: swapObj.swap_clothings,
      swapUsers: swapObj.swap_users,
      currentSwapUser: this.getCurrentSwapUser(swapObj.swap_users)
    })
    })
  }

  getCurrentSwapUser = (swapUsers) => (
    swapUsers.find(swapUser => swapUser.user_id === this.props.currentUser.id)
  )

  render() {
    return (
      <div>
        <h1>Clothing Swap</h1>
        <h5>Credits: {this.state.currentSwapUser.credits}</h5>
        <SwapClothingContainer credits={this.state.currentSwapUser.credits} reduceCredits={this.reduceCredits} clothings={this.state.clothings} routerProps={this.props.routerProps}/>
        <SwapperListContainer swappers={this.state.swappers}/>
      </div>
    );
  }
}

export default SwapContainer;
