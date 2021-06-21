import React, { Component } from "react";

class SwapsJoinedComponent extends Component {
  render() {
    return (
      <div>
        {this.props.name}:{" "}
        {this.props.start.toLocaleString("en-US", {
          timeStyle: "short",
          dateStyle: "medium",
        })}{" "}
        -{" "}
        {this.props.end.toLocaleString("en-US", {
          timeStyle: "short",
        })}
        <button>Enter Swap</button>
      </div>
    );
  }
}

export default SwapsJoinedComponent;
