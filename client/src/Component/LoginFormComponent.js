import React, { Component } from "react";

class LoginFormComponent extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
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
          <input type="submit" value="Log In" />
        </form>
      </div>
    );
  }
}

export default LoginFormComponent;
