import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginContainer from "./Container/LoginContainer";
import HomePageContainer from "./Container/HomePageContainer";
import SwapContainer from "./Container/SwapContainer";
import ClosetContainer from "./Container/ClosetContainer";
import SwapClosetContainer from "./Container/SwapClosetContainer";
import ClothingDetailsComponent from "./Component/ClothingDetailsComponent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: {},
      // instances of UserSwap model
      currentUserSwaps: [],
      allUsers: [],
      clothings: [],
      allUsers: [],
      currentClosetUser: {},
      currentSwap: {}
    };
  }

  getAllUsers = () => {
    fetch("http://localhost:3000/users", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(allUsersArray => this.setState({allUsers: allUsersArray}))
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
          this.getAllUsers()
          this.getCurrentUserSwaps();
          this.getUserClothing(userInfo.user)
        }
      })
      .then(() => history.push("/home"))
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

  getUserClothing = (userObj) => {
    fetch(`http://localhost:3000/get_clothings`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: userObj.id,
      }),
    })
      .then((res) => res.json())
      .then((clothingsArray) => {
        this.setState({
          clothings: clothingsArray,
          currentClosetUser: userObj
        })
        console.log("getUserClothing run")
      }
      );
  };

  addClothing = (clothingObj) => {
    fetch("http://localhost:3000/clothings", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(clothingObj)
    })
    .then(res => res.json())
    .then(newClothingObj => {
      this.setState({
        clothings: [...this.state.clothings, newClothingObj]
      })
    })
  }

  passSwapInfo = (swapObj) => {
    this.setState({
      currentSwap: swapObj
    })
  }

  getCurrentUserSwaps = () => {
    fetch(`http://localhost:3000/current_swap_users?currentUserId=${this.state.currentUser.id}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${localStorage.token}` },
    })
      .then(res => res.json())
      .then(currentSwapUsers => {
        let currentUserSwapsArray = currentSwapUsers.map(swapUser => swapUser.swap)
        this.setState({currentUserSwaps: currentUserSwapsArray})
      })
  }

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
                getUserClothing={this.getUserClothing}
                passSwapInfo={this.passSwapInfo}
                currentUserSwaps={this.state.currentUserSwaps}
                currentSwap={this.state.currentSwap}
              />
            )}
          />
          <Route
            exact
            path="/swap"
            render={(routerProps) => <SwapContainer currentSwap={this.state.currentSwap} currentUser={this.state.currentUser} routerProps={routerProps} getUserClothing={this.getUserClothing}/>}
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
                addClothing={this.addClothing}
                getUserClothing={this.getUserClothing}
                currentClosetUser={this.state.currentClosetUser}
              />
            )}
          />
          <Route
            exact
            path="/swapCloset"
            render={(routerProps) => <SwapClosetContainer clothings={this.state.clothings} getUserClothing={this.getUserClothing} currentUser={this.state.currentUser} routerProps={routerProps} currentSwap={this.state.currentSwap} getCurrentUserSwaps={this.getCurrentUserSwaps}/>}
          />
          <Route
          exact
          path="/clothingDetails"
          render={(routerProps) => <ClothingDetailsComponent routerProps={routerProps} currentUser={this.state.currentUser} currentClosetUser={this.state.currentClosetUser}/>}
          />
        </div>
      </Router>
    );
  }
}

export default App;
