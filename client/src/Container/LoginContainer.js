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

  toggleLogin = () => {
    this.setState({
      login: !this.state.login
    })
  }

  render() {
    return (
      <div>
        <h1>Clothing Swap</h1>
        {this.state.login ? <LoginFormComponent handleLogin={this.props.handleLogin} {...this.props.routerProps}/> : <RegisterFormComponent handleRegister={this.props.handleRegister}/>}
        <button onClick={this.toggleLogin}>{this.state.login ? 'Register' : 'Log In'}</button>
      </div>
    );
  }
}

export default LoginContainer;
