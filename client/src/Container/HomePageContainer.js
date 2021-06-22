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
        <ClosetPreviewContainer
          clothings={this.props.clothings}
          {...this.props.routerProps}
        />
        <FriendListContainer friends={this.props.friends} />
        <SwapListContainer
          userSwaps={this.props.currentUser.swaps}
          currentUser={this.props.currentUser}
        />
        <button
          onClick={() =>
            this.props.handleLogout(this.props.routerProps.history)
          }
        >
          Log Out
        </button>
      </div>
    );
  }
}

export default HomePageContainer;
