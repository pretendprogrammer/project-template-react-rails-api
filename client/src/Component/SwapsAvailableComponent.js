import React, { Component } from "react";
import { Container, Header, Button, Card } from 'semantic-ui-react'

class SwapsAvailableComponent extends Component {

  render() {
    return (
      <Container>
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
        <br></br>
        <Button onClick={() => {
          this.props.passSwapInfo(this.props.swap)
          this.props.getAllSwaps()
          this.props.history.push("/swapCloset")
        }}
        >Join Swap</Button>
      </Container>
    );
  }
}

export default SwapsAvailableComponent;
