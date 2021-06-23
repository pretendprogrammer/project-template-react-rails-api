import React, { Component } from "react";
import SwapClosetClothingContainer from "./SwapClosetClothingContainer";

class SwapClosetContainer extends Component {

  constructor() {
    super()
    this.state = {
      clothingsToSwap: []
    }
  }

  componentDidMount() {
    this.props.getUserClothing(this.props.currentUser)
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
  
  updateClothings = () => {
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
      .then(result => console.log(result))
  }

  createSwapUser = () => {
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

  render() {
    return (
      <div>
        <h1>Swap Your Clothes</h1>
        <SwapClosetClothingContainer clothings={this.props.clothings} routerProps={this.props.routerProps} toggleInclusionToSwap={this.toggleInclusionToSwap} clothingsToSwap={this.state.clothingsToSwap}/>
        <button onClick={() => {
          this.createSwapClothings()
          this.updateClothings()
          this.createSwapUser()
          this.props.routerProps.history.push('/home')
        }}
        // Three separate fetches, each passes the full array to the backend:
        // create a swapClothing for each clothing item in array with prev_owner_id (POST/CREATE SwapClothing)
        // remove userId from clothing (UPDATE clothing)
        // create a swapUser for the user and the swap with credits (POST/CREATE SwapUser)
        // push back to home page
        >Submit</button>
      </div>
    );
  }
}

export default SwapClosetContainer;
