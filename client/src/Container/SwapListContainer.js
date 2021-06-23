import React, { Component } from "react";
import SwapsAvailableComponent from "../Component/SwapsAvailableComponent";
import SwapsJoinedComponent from "../Component/SwapsJoinedComponent";

class SwapListContainer extends Component {
  state = {
    allSwapsArray: [],
  };

  getUsersSwaps = () => {
    fetch("http://localhost:3000/swaps", {
      method: "GET",
      headers: { Authorization: `Bearer ${localStorage.token}` },
    })
      .then((res) => res.json())
      .then((result) => {
        let optimizedArray = result.map((swap) => ({
          ...swap,
          start: new Date(swap.start),
          end: new Date(swap.end),
        }));
        this.setState({ allSwapsArray: optimizedArray });
      });
  }

  render() {
    let optimizedJoinedSwaps = this.props.currentUser.swaps.map((swap) => ({
      ...swap,
      start: new Date(swap.start),
      end: new Date(swap.end),
    }));

    let futureJoinedSwaps = optimizedJoinedSwaps.filter(swap => swap.end > new Date())

    let unjoinedSwaps = [...this.state.allSwapsArray]

    optimizedJoinedSwaps.forEach((joinedSwap) => {
      let index = unjoinedSwaps.findIndex((element) => element.id === joinedSwap.id)
      unjoinedSwaps.splice(index, 1)
    })

    let filteredUnjoinedSwaps = unjoinedSwaps.filter(swap => swap.start > new Date())

    this.getUsersSwaps()

    return (
      <div>
        {futureJoinedSwaps.map((swap) => (
          <SwapsJoinedComponent swap={swap} key={swap.id} passSwapInfo={this.props.passSwapInfo} getUsersSwaps={this.getUsersSwaps} {...this.props.routerProps}/>
        ))}
        {filteredUnjoinedSwaps.map(swap => <SwapsAvailableComponent {...this.props.routerProps} swap={swap} key={swap.id} passSwapInfo={this.props.passSwapInfo}/>)}
      </div>
    );
  }
}

export default SwapListContainer;