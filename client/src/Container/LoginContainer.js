import React, { Component } from "react";
import LoginFormComponent from "../Component/LoginFormComponent";
import RegisterFormComponent from "../Component/RegisterFormComponent";
import { Container, Header, Button } from 'semantic-ui-react'

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
      <Container textAlign='center' className="content-margin" >
        <Header as='h1'>Welcome to Style Swap</Header>
        {this.state.login 
        ? <Header as="h3">Please Log In to Continue</Header>
        : <Header as="h3">Register Below to Start Swapping</Header>}
        {this.state.login ? <LoginFormComponent handleLogin={this.props.handleLogin} {...this.props.routerProps}/> : <RegisterFormComponent handleRegister={this.props.handleRegister}/>}
        {this.state.login 
        ? <Header as="h4">Not Yet a Swapper?</Header>
        : <Header as="h4">Now Log In to Get Started</Header>}
        <Button className='form-button' onClick={this.toggleLogin}>{this.state.login ? 'Register' : 'Log In'}</Button>
      </Container>
    );
  }
}

export default LoginContainer;
