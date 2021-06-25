import React, { Component } from "react";
import { Container, Header, Button, Input, Form, Grid } from 'semantic-ui-react'

class RegisterFormComponent extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      bio: "",
      image_url: "",
      spirit_color: "",
      admin: false
    };
  }

  render() {
    return (
      <Container className="content-margin">
        <Grid centered>
        <Form className="form-width" onSubmit={(event) => 
          {event.preventDefault()
          this.props.handleRegister(this.state)}}>
          {/* <label htmlFor="username">Username</label> */}
          <Form.Input
            onChange={(event) => this.setState({username: event.target.value})}
            type="text"
            id="username"
            name="username"
            value={this.state.username}
            placeholder="Username"
          />
          {/* <label htmlFor="password">Password</label> */}
          <Form.Input
            onChange={(event) => this.setState({password: event.target.value})}
            type="password"
            id="password"
            name="password"
            value={this.state.password}
            placeholder="Password"
          />
          {/* <label htmlFor="bio">Bio</label> */}
          <Form.Input 
            onChange={(event) => this.setState({bio: event.target.value})}
            type="textarea" 
            id="bio" 
            name="bio" 
            value={this.state.bio}
            placeholder='Bio' />
          {/* <label htmlFor="imageUrl">Profile Picture</label> */}
          <Form.Input
            onChange={(event) => this.setState({image_url: event.target.value})}
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={this.state.image_url}
            placeholder="Profile Picture"
          />
          {/* <label htmlFor="spiritColor">Spirit Color</label> */}
          <Form.Input
            onChange={(event) => this.setState({spirit_color: event.target.value})}
            type="color"
            id="spiritColor"
            name="spiritColor"
            value={this.state.spirit_color}
            placeholder='Spirit Color'
          />
          <Form.Input className="form-button input-button" type="submit" value="Register" />
        </Form>
        </Grid>
      </Container>
    );
  }
}

export default RegisterFormComponent;
