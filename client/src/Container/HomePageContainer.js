import React, { Component } from "react";
import ProfileComponent from "../Component/ProfileComponent";
import ClosetPreviewContainer from "./ClosetPreviewContainer";
import FriendListContainer from "./FriendListContainer";
import SwapListContainer from "./SwapListContainer";
import { Container, Header, Button } from 'semantic-ui-react'

class HomePageContainer extends Component {
  render() {
    return (
      <Container className="centered-container content-margin">
        <ProfileComponent {...this.props.currentUser} />
        <ClosetPreviewContainer
          currentUser={this.props.currentUser}
          clothings={this.props.clothings}
          routerProps={this.props.routerProps}
          getUserClothing={this.props.getUserClothing}
        />
        <FriendListContainer friends={this.props.friends} getUserClothing={this.props.getUserClothing} routerProps={this.props.routerProps} currentClosetUser={this.props.currentClosetUser}
        />
        <SwapListContainer
          userSwaps={this.props.currentUser.swaps}
          currentUser={this.props.currentUser}
          routerProps={this.props.routerProps}
          passSwapInfo={this.props.passSwapInfo}
          currentUserSwaps={this.props.currentUserSwaps}
          currentSwap={this.props.currentSwap}
          getCurrentUserSwaps={this.props.getCurrentUserSwaps}
        />
        <Button
          onClick={() =>
            this.props.handleLogout(this.props.routerProps.history)
          }
        >
          Log Out
        </Button>
      </Container>
    );
  }
}

export default HomePageContainer;
