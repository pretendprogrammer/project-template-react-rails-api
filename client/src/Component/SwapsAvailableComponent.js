import React, { Component } from "react";

class SwapsAvailableComponent extends Component {
  render() {
    return (
      <div>
        {this.props.name}:{" "}
        {this.props.start.toLocaleString("en-US", {
          // timeZone: "EST",
          timeStyle: "short",
          dateStyle: "medium",
        })}{" "}
        -{" "}
        {this.props.end.toLocaleString("en-US", {
          timeStyle: "short",
          // timeZone: "EST",
        })}
        <button>Join Swap</button>
      </div>
    );
  }
}

export default SwapsAvailableComponent;
