import React, { Component } from "react";

class ProfileComponent extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.username}</h1>
        <img src={this.props.image_url} />
        <p>{this.props.bio}</p>
        <div style={{backgroundColor: this.props.spirit_color}}>spirit</div>
      </div>
    )
  }
}

export default ProfileComponent;
