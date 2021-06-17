import React, { Component } from "react";
import LoginFormComponent from "../Component/LoginFormComponent";
import RegisterFormComponent from "../Component/RegisterFormComponent";

class LoginContainer extends Component {
  constructor() {
    super();
    this.state = {
      login: true,
    };
  }

  render() {
    return (
      <div>
        <h1>Clothing Swap</h1>
        {this.state.login ? <LoginFormComponent /> : <RegisterFormComponent />}
      </div>
    );
  }
}

export default LoginContainer;
