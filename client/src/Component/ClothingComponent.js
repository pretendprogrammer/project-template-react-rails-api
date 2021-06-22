import React, { Component } from "react";
import ClothingDetailsComponent from "../Component/ClothingDetailsComponent";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import { Modal, Image } from 'semantic-ui-react'

class ClothingComponent extends Component {
  state = { viewClothing: {} };
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
    this.setState({ seeDetails: !this.state.seeDetails });
  };

  getIndividualClothing = (clothingId) => {
    fetch(`http://localhost:3000/clothings/${clothingId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((clothingItem) => this.setState({ viewClothing: clothingItem }));
  };

  render() {
    return (
      <Router>
        <div>
          {/* <Modal trigger={<button>View Details</button>} open={this.state.show} onOpen={this.showModal} onClose={this.hideModal}>
          <Modal.Header>{this.props.clothing.name}</Modal.Header>
          <Modal.Content image><Image src={this.props.clothing.image_url}/></Modal.Content>
          <Modal.Description>{this.props.clothing.description}</Modal.Description>
        </Modal> */}
          <Route
            exact
            path="/clothingDetails"
            render={(routerProps) => (
              <ClothingDetailsComponent
                {...this.state.viewClothing}
                handleDeleteClothing={this.props.handleDeleteClothing}
              />
            )}
          />
          <div>
            <img
              src={this.props.clothing.image_url}
              alt={this.props.clothing.name}
            />
            {this.props.clothing.name}
          </div>
          {/* Conditionally render so not available in closet preview */}
          {this.props.parent === "clothingContainer" ? (
            <button
              onClick={() => {
                this.getIndividualClothing(this.props.clothing.id);
                this.props.history.push("/clothingDetails");
              }}
            >
              View Details
            </button>
          ) : null}
        </div>
      </Router>
    );
  }
}

export default ClothingComponent;
