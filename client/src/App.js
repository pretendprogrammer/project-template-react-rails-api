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
  
 handleLogin = (loginObj) => {
   postConfig = {
     method: 'POST',
     headers: {
      "Content-Type": "application/json"
     },
     body: JSON.stringify(loginObj)
   }
   fetch("http://localhost:3000/login", postConfig)
    .then(res => res.json)
    .then(result => console.log(result))
 }

  render() {
    return (
      <Router>
        <div>
          <Route
            exact
            path="/"
            render={(routerProps) => <LoginContainer />}
          />
          <Route
            exact
            path="/home"
            render={(routerProps) => <HomePageContainer />}
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
