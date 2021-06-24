import React, { Component } from "react";

class SwapsJoinedComponent extends Component {

  state = { ableToJoin: this.props.swap.start <= new Date() }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        ableToJoin: this.props.swap.start <= new Date()
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

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
        {this.state.ableToJoin
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
