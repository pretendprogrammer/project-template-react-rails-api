import React, { Component } from "react";
import ProfileComponent from "../Component/ProfileComponent";
import ClosetPreviewContainer from "./ClosetPreviewContainer";
import FriendListContainer from "./FriendListContainer";
import SwapListContainer from "./SwapListContainer";

class HomePageContainer extends Component {
  render() {
    return (
      <div>
        <ProfileComponent />
        <ClosetPreviewContainer />
        <FriendListContainer />
        <SwapListContainer />
      </div>
    );
  }
}

export default HomePageContainer;
