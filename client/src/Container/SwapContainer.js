import React, { Component } from "react";
import SwapClothingContainer from "./SwapClothingContainer";
import SwapperListContainer from "../Container/SwapperListContainer";
import { Container, Header, Button, Card } from 'semantic-ui-react'

class SwapContainer extends Component {

  constructor() {
    super()
    this.state = {
      clothings: [],
      swappers: [],
      swapClothings: [],
      currentSwapUser: {},
      swapUsers: []
    }
  }

  takeClothing = (clothingId) => {
    let swapClothingId = this.state.swapClothings.find(swapClothing => swapClothing.clothing_id === clothingId).id
    let deleteConfig = {
      method: 'DELETE',
      headers: {Authorization: `Bearer ${localStorage.token}`}
    }
    fetch(`http://localhost:3000/swap_clothings/${swapClothingId}`, deleteConfig)
      .then(res => res.json())
      .then(deletedClothing => {
        if(!deletedClothing.error) {
          let patchConfig = {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.token}`
            },
            body: JSON.stringify({user_id: this.props.currentUser.id})
          }
          fetch(`http://localhost:3000/clothings/${clothingId}`, patchConfig)
            .then(res => res.json())
            .then(updatedClothingObj => {
              let filteredArray = this.state.clothings.filter(clothing => clothing.id !== updatedClothingObj.id)
              this.setState({clothings: filteredArray})
            })
        }
      })
  }

  reduceCredits = () => {
    if (this.state.currentSwapUser.credits > 0) {
      let patchConfig = {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({credits: this.state.currentSwapUser.credits - 1})
      }
      fetch(`http://localhost:3000/swap_users/${this.state.currentSwapUser.id}`, patchConfig)
        .then(res => res.json())
        .then(result => {
          if (!result.error) {
            this.setState({currentSwapUser: result})
          }
        })
    }
  }

  componentDidMount() {
    console.log('line 69')
    fetch(`http://localhost:3000/swaps/${this.props.currentSwap.id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json",
      }
    })
    .then(res => res.json())
    .then(swapObj => {this.setState({
      clothings: swapObj.clothings,
      swappers: swapObj.users,
      swapClothings: swapObj.swap_clothings,
      swapUsers: swapObj.swap_users,
      currentSwapUser: this.getCurrentSwapUser(swapObj.swap_users)
    })
    })
  }

  getCurrentSwapUser = (swapUsers) => (
    swapUsers.find(swapUser => swapUser.user_id === this.props.currentUser.id)
  )

  render() {
    return (
      <Container className="centered-container content-margin">
        <Header as='h1'>Clothing Swap</Header>
        <Header as='h5'>Credits: {this.state.currentSwapUser.credits}</Header>
        <SwapClothingContainer takeClothing={this.takeClothing} credits={this.state.currentSwapUser.credits} reduceCredits={this.reduceCredits} clothings={this.state.clothings} routerProps={this.props.routerProps} getUserClothing={this.props.getUserClothing} currentUser={this.props.currentUser}/>
        <SwapperListContainer swappers={this.state.swappers}/>
        <Button
        onClick={() => {
          this.props.routerProps.history.push("/home")
        }}
        >Leave Swap</Button>
      </Container>
    );
  }
}

export default SwapContainer;
