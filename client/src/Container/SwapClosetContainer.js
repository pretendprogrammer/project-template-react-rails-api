import React, { Component } from "react";
import SwapClosetClothingContainer from "./SwapClosetClothingContainer";
import { Container, Header, Button, Card } from 'semantic-ui-react'

class SwapClosetContainer extends Component {

  constructor() {
    super()
    this.state = {
      clothingsToSwap: []
    }
  }

  toggleInclusionToSwap = (clothingObj) => {
    let exists = this.state.clothingsToSwap.find(clothing => clothing.id === clothingObj.id)
    if(exists){
      let updatedClothingsToSwap = this.state.clothingsToSwap.filter(clothing => clothing.id !== clothingObj.id)
      this.setState({
        clothingsToSwap: updatedClothingsToSwap
      })
    } else {
        this.setState({
          clothingsToSwap: [...this.state.clothingsToSwap, clothingObj]
      })
    }
  }

  createSwapClothings = () => {
    let postConfig = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({array: this.state.clothingsToSwap, swap_id: this.props.currentSwap.id})
    }
    fetch('http://localhost:3000/swap_clothings', postConfig)
      .then(res => res.json())
      .then(result => console.log(result))

  }
  
  updateClothings = async () => {
    let patchConfig = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({array: this.state.clothingsToSwap})
    }
    fetch('http://localhost:3000/remove_user_ids', patchConfig)
      .then(res => res.json())
      .then(result => {
        console.log("update clothings function in swapclosetcontainer")
        this.props.getUserClothing(this.props.currentUser)
        console.log(result)
      })
  }

  createSwapUser = async () => {
    let postConfig = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({user_id: this.props.currentUser.id, swap_id: this.props.currentSwap.id, credits: this.state.clothingsToSwap.length})
    }
    fetch('http://localhost:3000/swap_users', postConfig)
      .then(res => res.json())
      .then(result => console.log(result))
  }

  fullSubmitFunction = async () => {
    this.createSwapClothings()
    this.updateClothings()
    this.createSwapUser().then(() => this.props.getCurrentUserSwaps(this.props.currentSwap.id))
  }

  render() {
    return (
      <Container className="centered-container content-margin">
        <Header as='h1'>Swap Your Clothes</Header>
        <SwapClosetClothingContainer clothings={this.props.clothings} routerProps={this.props.routerProps} toggleInclusionToSwap={this.toggleInclusionToSwap} clothingsToSwap={this.state.clothingsToSwap} getUserClothing={this.props.getUserClothing} currentUser={this.props.currentUser}/>
        <Button onClick={() => {
          this.fullSubmitFunction().then(() => this.props.routerProps.history.push('/home'))
          // this.createSwapClothings()
          // this.updateClothings()
          // .then(() => this.props.getUserClothing(this.props.currentUser))
          // this.createSwapUser().then(() => this.props.getCurrentUserSwaps(this.props.currentSwap.id))
          // this.props.getCurrentUserSwaps(this.props.currentSwap.id)
        }}
        >Submit</Button>
      </Container>
    );
  }
}

export default SwapClosetContainer;
