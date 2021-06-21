import React, { Component } from "react";
import ClothingDetailsComponent from "../Component/ClothingDetailsComponent"
// import { Modal, Image } from 'semantic-ui-react'

class ClothingComponent extends Component {
  state = {seeDetails: false}
  // constructor() {
  //   super();
  //   this.state = {
  //     show: false
  //   };
  //   this.showModal = this.showModal.bind(this);
  //   this.hideModal = this.hideModal.bind(this);
  // }

  // showModal = () => {
  //   this.setState({ show: true });
  // };

  // hideModal = () => {
  //   this.setState({ show: false });
  // };

  toggleDetails = () => {
    this.setState({seeDetails: !this.state.seeDetails})
  }

  render() {
    return (
      <div>
        {/* <Modal trigger={<button>View Details</button>} open={this.state.show} onOpen={this.showModal} onClose={this.hideModal}>
          <Modal.Header>{this.props.clothing.name}</Modal.Header>
          <Modal.Content image><Image src={this.props.clothing.image_url}/></Modal.Content>
          <Modal.Description>{this.props.clothing.description}</Modal.Description>
        </Modal> */}
        {this.state.seeDetails ? <ClothingDetailsComponent {...this.props.clothing} handleDeleteClothing={this.props.handleDeleteClothing}/> : <div>
          <img src={this.props.clothing.image_url} alt={this.props.clothing.name}/>
          {this.props.clothing.name}  
          </div>
      }
      {/* Conditionally render so not available in closet preview */}
      {this.props.parent === "clothingContainer" 
      ? <button onClick={this.toggleDetails}>{this.state.seeDetails ? 'Hide Details' : 'View Details'} </button> 
      : null}
      </div>
    )
  }
}

export default ClothingComponent;
