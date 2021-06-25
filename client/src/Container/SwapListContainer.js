import React, { Component } from "react";
import SwapsAvailableComponent from "../Component/SwapsAvailableComponent";
import SwapsJoinedComponent from "../Component/SwapsJoinedComponent";
import CreateSwapsFormComponent from '../Component/CreateSwapsFormComponent'
import { Container, Header, Button, Card } from 'semantic-ui-react'

class SwapListContainer extends Component {
  state = {
    allSwapsArray: [],
  };

  componentDidMount() {
    this.getAllSwaps()
    this.props.getCurrentUserSwaps()
  }

  getAllSwaps = () => {
    return fetch("http://localhost:3000/swaps", {
      method: "GET",
      headers: { Authorization: `Bearer ${localStorage.token}` },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
        let optimizedArray = result.map((swap) => ({
          ...swap,
          start: new Date(swap.start),
          end: new Date(swap.end),
        }));
        //  return optimizedArray
        this.setState({ allSwapsArray: optimizedArray });
      })
  }

  render() {
    let optimizedJoinedSwaps = this.props.currentUserSwaps.map((swap) => ({
      ...swap,
      start: new Date(swap.start),
      end: new Date(swap.end),
    }))

    let futureJoinedSwaps = optimizedJoinedSwaps.filter(swap => swap.end > new Date())

    let unjoinedSwaps = [...this.state.allSwapsArray]

    optimizedJoinedSwaps.forEach((joinedSwap) => {
      let index = unjoinedSwaps.findIndex((element) => element.id === joinedSwap.id)
      unjoinedSwaps.splice(index, 1)
    })

    let filteredUnjoinedSwaps = unjoinedSwaps.filter(swap => swap.start > new Date())

    // this.getUsersSwaps()

    return (
      <Container className="centered-container content-margin">
        {futureJoinedSwaps.length > 0
        ? <Header as="h2">Participating Swaps</Header>
        : null}
        {futureJoinedSwaps.map((swap) => (
          <SwapsJoinedComponent swap={swap} key={swap.id} passSwapInfo={this.props.passSwapInfo} getAllSwaps={this.getAllSwaps} {...this.props.routerProps} />
        ))}
        {filteredUnjoinedSwaps.length > 0
        ? <Header as="h2">Swaps Available to Join</Header>
        : null}
        {filteredUnjoinedSwaps.map(swap => <SwapsAvailableComponent {...this.props.routerProps} swap={swap} key={swap.id} passSwapInfo={this.props.passSwapInfo} getAllSwaps={this.getAllSwaps}/>)}
        {this.props.currentUser.admin 
        ? <CreateSwapsFormComponent getAllSwaps={this.getAllSwaps}/>
        : null}
      </Container>
    );
  }
}

export default SwapListContainer;