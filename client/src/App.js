import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginContainer from "./Container/LoginContainer";
import HomePageContainer from "./Container/HomePageContainer";
import SwapContainer from "./Container/SwapContainer";
import ClosetContainer from "./Container/ClosetContainer";
import SwapClosetContainer from "./Container/SwapClosetContainer";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route
            exact
            path="/login"
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
