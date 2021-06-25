import React, { Component } from "react";
import AddClothingFormComponent from "../Component/AddClothingFormComponent";
import ClothingContainer from "./ClothingContainer";
import { Container, Header, Button, Card } from 'semantic-ui-react'

class ClosetContainer extends Component {

  // componentDidMount(){
  //   if(this.props.routerProps.location.state.parent === "FriendContainer"){
  //     this.getUserClothing(this.props.routerProps.location.state.currentClosetUser)
  //   }
  // }

  render() {
    return (
      <Container className="centered-container content-margin">
        <Header as='h1'>{this.props.currentClosetUser.username}'s Closet</Header>
        <ClothingContainer
          clothings={this.props.clothings}
          handleDeleteClothing={this.props.handleDeleteClothing}
          routerProps={this.props.routerProps}
          currentClosetUser={this.props.currentClosetUser}
          getUserClothing={this.props.getUserClothing}
        />
        {(this.props.currentClosetUser.id === this.props.currentUser.id) 
        ? <AddClothingFormComponent currentUserId={this.props.currentUser.id} addClothing={this.props.addClothing} /> 
        : null}
        <Button onClick={() => this.props.routerProps.history.push("/home")}>Back to Home</Button>
      </Container>
    );
  }
}

export default ClosetContainer;
