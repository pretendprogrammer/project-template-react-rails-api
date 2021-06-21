import React, { Component } from "react";

class SwapsJoinedComponent extends Component {
  render() {
    return (
      <div>
        {this.props.name}:{" "}
        {this.props.start.toLocaleString("en-US", {
          timeStyle: "short",
          dateStyle: "medium",
          // timeZone: "EST",
        })}{" "}
        -{" "}
        {this.props.end.toLocaleString("en-US", {
          timeStyle: "short",
          // timeZone: "EST",
        })}
        <button>Enter Swap</button>
      </div>
    );
  }
}

export default SwapsJoinedComponent;
