import React, { Component } from "react";
import SwapsAvailableComponent from "../Component/SwapsAvailableComponent";
import SwapsJoinedComponent from "../Component/SwapsJoinedComponent";

class SwapListContainer extends Component {
  state = {
    swapListArray: [],
  };

  componentDidMount() {
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
        this.setState({ swapListArray: optimizedArray });
      });
  }

  render() {
    let optimizedJoinedSwaps = this.props.currentUser.swaps.map((swap) => ({
      ...swap,
      start: new Date(swap.start),
      end: new Date(swap.end),
    }));

    return (
      <div>
        {optimizedJoinedSwaps.map((swap) => (
          <SwapsJoinedComponent {...swap} key={swap.id} />
        ))}
        {this.state.swapListArray
          .filter((swap) => {
            debugger;
            return (
              swap.start > new Date() &&
              this.props.currentUser.swaps.includes(swap) === false
            );
          })
          .map((swap) => (
            <SwapsAvailableComponent {...swap} key={swap.id} />
          ))}
      </div>
    );
  }
}

export default SwapListContainer;
