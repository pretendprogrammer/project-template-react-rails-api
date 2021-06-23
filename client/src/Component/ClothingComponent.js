import React, { Component } from "react";
import ClothingDetailsComponent from "../Component/ClothingDetailsComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class ClothingComponent extends Component {
  state = { 
    viewClothing: {},
    swapped: ""
  };

  toggleDetails = () => {
    this.setState({ seeDetails: !this.state.seeDetails });
  };

  swapped = () => {
    let exists = this.props.clothingsToSwap.find(clothing => clothing.id === this.props.clothing.id)
    return exists ? true : false
  }

  getIndividualClothing = (clothingId) => {
    fetch(`http://localhost:3000/clothings/${clothingId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((clothingItem) => this.setState({ viewClothing: clothingItem }));
  };

  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path={`${this.props.match.url}/:clothingId`}
            render={(routerProps) =>
              <ClothingDetailsComponent
                {...this.state.viewClothing}
                handleDeleteClothing={this.props.handleDeleteClothing}
              />
            }
          />
          <Route
            path={this.props.match.path}
            render={(routerProps) => (
              <div>
                <img src={this.props.clothing.image_url} alt={this.props.clothing.name} />
                {this.props.clothing.name}
                {this.props.parent === "clothingContainer" ?
                  <button
                  onClick={() => {
                    this.getIndividualClothing(this.props.clothing.id);
                    // this.props.history.push("/home") <- This works fine
                    debugger
                    this.props.history.push(`${this.props.match.url}/${this.props.clothing.id}`);
                  }}
                  >
                    View Details
                  </button>
                : this.props.parent === "swapClosetClothingContainer"
                ? <button
                    onClick={() => this.props.toggleInclusionToSwap(this.props.clothing)}
                >{this.swapped() ? 'Remove From Swap' : 'Add to Swap'}</button>
                : this.props.parent === "swapClothingContainer" 
                ? <button
                // updates clothing to have user's id
                // removes 1 from credits
                >Take</button>
                : null}

              </div>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default ClothingComponent;
