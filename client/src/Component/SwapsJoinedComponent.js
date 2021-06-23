import React, { Component } from "react";

class SwapsJoinedComponent extends Component {
  render() {
    return (
      <div>
        {this.props.swap.name}:{" "}
        {this.props.swap.start.toLocaleString("en-US", {
          timeStyle: "short",
          dateStyle: "medium",
          // timeZone: "EST",
        })}{" "}
        -{" "}
        {this.props.swap.end.toLocaleString("en-US", {
          timeStyle: "short",
          // timeZone: "EST",
        })}
        {this.props.swap.start <= new Date()
          ? <button onClick={() => {
            this.props.passSwapInfo(this.props.swap)
            this.props.getAllSwaps()
            this.props.history.push("/swap")
            }}>Enter Swap</button>
        : null}
      </div>
    );
  }
}

export default SwapsJoinedComponent;
