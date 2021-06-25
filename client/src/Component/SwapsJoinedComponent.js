import React, { Component } from "react";
import { Container, Header, Button, Card } from 'semantic-ui-react'

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
      <Container>
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
          ? <Button onClick={() => {
            this.props.passSwapInfo(this.props.swap)
            this.props.getAllSwaps()
            this.props.history.push("/swap")
            }}>Enter Swap</Button>
        : null}
      </Container>
    );
  }
}

export default SwapsJoinedComponent;
