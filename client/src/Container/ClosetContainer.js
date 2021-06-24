import React, { Component } from "react";
import AddClothingFormComponent from "../Component/AddClothingFormComponent";
import ClothingContainer from "./ClothingContainer";

class ClosetContainer extends Component {

  render() {
    return (
      <div>
        <h1>{this.props.currentClosetUser.username}'s Closet</h1>
        <ClothingContainer
          clothings={this.props.clothings}
          handleDeleteClothing={this.props.handleDeleteClothing}
          routerProps={this.props.routerProps}
          getUserClothing={this.props.getUserClothing}
          currentClosetUser={this.props.currentClosetUser}
          getUserClothing={this.props.getUserClothing}
        />
        {(this.props.currentClosetUser.id === this.props.currentUser.id) 
        ? <AddClothingFormComponent currentUserId={this.props.currentUser.id} addClothing={this.props.addClothing} /> 
        : null}
        <button onClick={() => this.props.routerProps.history.push("/home")}>Back to Home</button>
      </div>
    );
  }
}

export default ClosetContainer;
