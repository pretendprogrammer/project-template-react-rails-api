import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginContainer from "./Container/LoginContainer";
import HomePageContainer from "./Container/HomePageContainer";
import SwapContainer from "./Container/SwapContainer";
import ClosetContainer from "./Container/ClosetContainer";
import SwapClosetContainer from "./Container/SwapClosetContainer";

class App extends Component {

  constructor() {
    super()
    this.state = {
      currentUser: {}
    }
  }
  
 handleLogin = (loginObj, history) => {
   const postConfig = {
     method: 'POST',
     headers: {
      "Content-Type": "application/json"
     },
     body: JSON.stringify(loginObj)
   }
   fetch("http://localhost:3000/login", postConfig)
    .then(res => res.json())
    .then(userInfo => {
      if(userInfo.error) {
        alert(userInfo.error)
      } else {
        console.log(userInfo)
        this.setState({currentUser: userInfo.user})
        localStorage.token = userInfo.token
        history.push("/home")
      }
    })
 }

 handleRegister = (registerObj) => {
  const postConfig = {
    method: 'POST',
    headers: {
     "Content-Type": "application/json"
    },
    body: JSON.stringify(registerObj)
  }
  fetch("http://localhost:3000/users", postConfig)
    .then(res => res.json())
    .then(userInfo => {
      if(userInfo.error) {
        alert(userInfo.error.join(';\n'))
      } else {
        alert('New user succesfully registered!\nPlease log in to continue...')
      }
    })
 }

  render() {
    return (
      <Router>
        <div>
          <Route
            exact
            path="/"
            render={(routerProps) => <LoginContainer handleLogin={this.handleLogin} handleRegister={this.handleRegister} routerProps={routerProps} />}
          />
          <Route
            exact
            path="/home"
            render={(routerProps) => <HomePageContainer currentUser={this.state.currentUser}/>}
          />
          <Route
            exact
            path="/swap"
            render={(routerProps) => <SwapContainer />}
          />
          <Route
            exact
            path="/closet"
            render={(routerProps) => <ClosetContainer />}
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

export default App;
