import React, { Component } from "react";
import FriendComponent from "../Component/FriendComponent";

class FriendListContainer extends Component {
  render() {
    return (
      <div>
        {this.props.friends.map((friend) => {
          <FriendComponent friend={friend} key={friend.id} />;
        })}
      </div>
    );
  }
}

export default FriendListContainer;
