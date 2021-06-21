import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginContainer from "./Container/LoginContainer";
import HomePageContainer from "./Container/HomePageContainer";
import SwapContainer from "./Container/SwapContainer";
import ClosetContainer from "./Container/ClosetContainer";
import SwapClosetContainer from "./Container/SwapClosetContainer";
import { withRouter } from 'react-router-dom'

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: {},
    };
  }
  
  handleDeleteClothing = (clothingId) => {
    fetch(`http://localhost:3000/clothings/${clothingId}`, {headers: { Authorization: `Bearer ${localStorage.token}` }, method: 'DELETE'})
      .then(res => res.json())
      .then(() => {
        let updatedUser = {...this.state.currentUser}
        updatedUser.clothings = updatedUser.clothings.filter(clothing => clothing.id !== clothingId)
        this.setState({currentUser: updatedUser})
      })
  }

  handleLogin = (loginObj, history) => {
    const postConfig = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginObj),
    };
    fetch("http://localhost:3000/login", postConfig)
      .then((res) => res.json())
      .then((userInfo) => {
        if (userInfo.error) {
          alert(userInfo.error);
        } else {
          console.log(userInfo);
          this.setState({ currentUser: userInfo.user });
          localStorage.token = userInfo.jwt;
          history.push("/home");
        }
      });
  };

  handleLogout = (history) => {
    history.push("/")
    this.setState({currentUser: {}})
    localStorage.clear()
  }

  handleRegister = (registerObj) => {
    const postConfig = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerObj),
    };
    fetch("http://localhost:3000/users", postConfig)
      .then((res) => res.json())
      .then((userInfo) => {
        if (userInfo.error) {
          alert(userInfo.error.join(";\n"));
        } else {
          alert(
            "New user succesfully registered!\nPlease log in to continue..."
          );
        }
      });
  };

  render() {
    return (
      <Router>
        <div>
          <Route
            exact
            path="/"
            render={(routerProps) => (
              <LoginContainer
                handleLogin={this.handleLogin}
                handleRegister={this.handleRegister}
                routerProps={routerProps}
              />
            )}
          />
          <Route
            exact
            path="/home"
            render={(routerProps) => (
              <HomePageContainer currentUser={this.state.currentUser} routerProps={routerProps} handleLogout={this.handleLogout}/>
            )}
          />
          <Route
            exact
            path="/swap"
            render={(routerProps) => <SwapContainer />}
          />
          <Route
            exact
            path="/closet"
            render={(routerProps) => <ClosetContainer currentUser={this.state.currentUser} handleDeleteClothing={this.handleDeleteClothing}/>}
          />
          <Route
            exact
            path="/swapCloset"
            render={(routerProps) => <SwapClosetContainer />}
          />
        </div>
      </Router>
    );
  }
}

export default withRouter(App);
