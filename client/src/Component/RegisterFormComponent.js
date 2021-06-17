import React, { Component } from "react";

class RegisterFormComponent extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      bio: "",
      image_url: "",
      spirit_color: "",
    };
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => 
          {event.preventDefault()
          this.props.handleRegister(this.state)}}>
          <label htmlFor="username">Username</label>
          <input
            onChange={(event) => this.setState({username: event.target.value})}
            type="text"
            id="username"
            name="username"
            value={this.state.username}
          />
          <label htmlFor="password">Password</label>
          <input
            onChange={(event) => this.setState({password: event.target.value})}
            type="password"
            id="password"
            name="password"
            value={this.state.password}
          />
          <label htmlFor="bio">Bio</label>
          <input 
            onChange={(event) => this.setState({bio: event.target.value})}
            type="textarea" 
            id="bio" 
            name="bio" 
            value={this.state.bio} />
          <label htmlFor="imageUrl">Profile Picture</label>
          <input
            onChange={(event) => this.setState({image_url: event.target.value})}
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={this.state.image_url}
          />
          <label htmlFor="spiritColor">Spirit Color</label>
          <input
            onChange={(event) => this.setState({spirit_color: event.target.value})}
            type="text"
            id="spiritColor"
            name="spiritColor"
            value={this.state.spirit_color}
          />
          <input type="submit" value="Register" />
        </form>
      </div>
    );
  }
}

export default RegisterFormComponent;
