import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginContainer from "./Container/LoginContainer";
import HomePageContainer from "./Container/HomePageContainer";
import SwapContainer from "./Container/SwapContainer";
import ClosetContainer from "./Container/ClosetContainer";
import SwapClosetContainer from "./Container/SwapClosetContainer";
import { withRouter } from "react-router-dom";
import ClothingDetailsComponent from "./Component/ClothingDetailsComponent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: {},
      allUsers: [],
      clothings: [],
    };
  }

  handleDeleteClothing = (clothingId) => {
    fetch(`http://localhost:3000/clothings/${clothingId}`, {
      headers: { Authorization: `Bearer ${localStorage.token}` },
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        let updatedUser = { ...this.state.currentUser };
        updatedUser.clothings = updatedUser.clothings.filter(
          (clothing) => clothing.id !== clothingId
        );
        this.setState({ currentUser: updatedUser });
      });
  };

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
          this.getUserClothing(this.state.currentUser.id);
          history.push("/home");
        }
      });
  };

  handleLogout = (history) => {
    history.push("/");
    this.setState({ currentUser: {} });
    localStorage.clear();
  };

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

  getUserClothing = (userId) => {
    fetch(`http://localhost:3000/get_clothings`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: userId,
      }),
    })
      .then((res) => res.json())
      .then((clothingsArray) =>
        this.setState({
          clothings: clothingsArray,
        })
      );
  };

  render() {
    let friendsArray = this.state.allUsers.filter(
      (user) => user.id !== this.state.currentUser.id
    );
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
              <HomePageContainer
                currentUser={this.state.currentUser}
                clothings={this.state.clothings}
                routerProps={routerProps}
                handleLogout={this.handleLogout}
                friends={friendsArray}
              />
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
            render={(routerProps) => (
              <ClosetContainer
                currentUser={this.state.currentUser}
                handleDeleteClothing={this.handleDeleteClothing}
                clothings={this.state.clothings}
                routerProps={routerProps}
              />
            )}
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
