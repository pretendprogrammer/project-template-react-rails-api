import React, { Component } from "react";

class FriendComponent extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.friend.username}</h4>
        <button>View Closet</button>
      </div>
    );
  }
}

export default FriendComponent;
