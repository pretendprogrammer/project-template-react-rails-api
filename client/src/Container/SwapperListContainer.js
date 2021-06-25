import React, { Component } from "react";
import SwapperComponent from "../Component/SwapperComponent";
import { Container, Header, Button, Card } from 'semantic-ui-react'

class SwapperListContainer extends Component {
  render() {
    return (
      <Container className="centered-container content-margin">
        <Header as='h5'>Participating Swappers</Header>
        {this.props.swappers.map(swapper => <SwapperComponent swapper={swapper} key={swapper.id} />)}
      </Container>
    );
  }
}

export default SwapperListContainer;
