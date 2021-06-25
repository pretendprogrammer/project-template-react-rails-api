import React, { Component } from "react";
import { Container, Header, Button, Input, Form, Grid } from 'semantic-ui-react'

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
      <Container className="content-margin">
        <Grid centered>
        <Form className="form-width" onSubmit={event => {
          event.preventDefault()
          this.props.handleLogin(this.state, this.props.history)} }>
          <Form.Input onChange={(event) => this.setState({username: event.target.value})}
            type="text"
            id="username"
            name="username"
            value={this.state.username}
            placeholder='Username'
          />
          <Form.Input onChange={(event) => this.setState({password: event.target.value})}
            type="password"
            id="password"
            name="password"
            value={this.state.password}
            placeholder='Password'
          />
          <Form.Input textAlign="center" className="submit-button" type="submit" value="Log In" />
        </Form>
        </Grid>
      </Container>
    );
  }
}

export default LoginFormComponent;
