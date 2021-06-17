import React, { Component } from "react";

class LoginFormComponent extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  render() {
    return (
      <div>
        <form onSubmit={event => {
          event.preventDefault()
          this.props.handleLogin(this.state, this.props.history)} }>
          <label htmlFor="username">Username</label>
          <input onChange={(event) => this.setState({username: event.target.value})}
            type="text"
            id="username"
            name="username"
            value={this.state.username}
          />
          <label htmlFor="password">Password</label>
          <input onChange={(event) => this.setState({password: event.target.value})}
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
