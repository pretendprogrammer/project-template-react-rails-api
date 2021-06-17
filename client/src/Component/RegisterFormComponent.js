import React, { Component } from "react";

class RegisterFormComponent extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      bio: "",
      imageUrl: "",
      spiritColor: "",
    };
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={this.state.username}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={this.state.password}
          />
          <label htmlFor="bio">Bio</label>
          <input type="text" id="bio" name="bio" value={this.state.bio} />
          <label htmlFor="imageUrl">Profile Picture</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={this.state.imageUrl}
          />
          <label htmlFor="spiritColor">Spirit Color</label>
          <input
            type="text"
            id="spiritColor"
            name="spiritColor"
            value={this.state.spiritColor}
          />
          <input type="submit" value="Register" />
        </form>
      </div>
    );
  }
}

export default RegisterFormComponent;
