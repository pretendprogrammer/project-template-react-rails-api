import React, { Component } from "react";
import ProfileComponent from "../Component/ProfileComponent";
import ClosetPreviewContainer from "./ClosetPreviewContainer";
import FriendListContainer from "./FriendListContainer";
import SwapListContainer from "./SwapListContainer";

class HomePageContainer extends Component {
  render() {
    return (
      <div>
        <ProfileComponent {...this.props.currentUser} />
        <ClosetPreviewContainer clothings={this.props.currentUser.clothings} />
        <FriendListContainer />
        <SwapListContainer
          userSwaps={this.props.currentUser.swaps}
          currentUser={this.props.currentUser}
        />
      </div>
    );
  }
}

export default HomePageContainer;
