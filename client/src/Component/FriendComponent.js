import React, { Component } from "react";

class FriendComponent extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.friend.username}</h4>
        <button
        onClick={() => {
          this.props.getUserClothing(this.props.friend)
          this.props.history.push("/closet")
        }}
        >View Closet</button>
      </div>
    );
  }
}

export default FriendComponent;
