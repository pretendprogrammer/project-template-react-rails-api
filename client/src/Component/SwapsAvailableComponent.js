import React, { Component } from "react";

class SwapsAvailableComponent extends Component {

  render() {
    return (
      <div>
        {this.props.swap.name}:{" "}
        {this.props.swap.start.toLocaleString("en-US", {
          // timeZone: "EST",
          timeStyle: "short",
          dateStyle: "medium",
        })}{" "}
        -{" "}
        {this.props.swap.end.toLocaleString("en-US", {
          timeStyle: "short",
          // timeZone: "EST",
        })}
        <button onClick={() => {
          this.props.passSwapInfo(this.props.swap)
          this.props.history.push("/swapCloset")
        }}
        >Join Swap</button>
      </div>
    );
  }
}

export default SwapsAvailableComponent;
