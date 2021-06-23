import React, { Component } from "react";

class ClothingDetailsComponent extends Component {
  render() {
    console.log(this.props)
    let viewClothing = this.props.routerProps.location.state.viewClothing
    return (
      <div>
        {viewClothing.name}
        <img src={viewClothing.image_url} alt={viewClothing.name} />
        <p>{viewClothing.description}</p>
        <p>Brand: {viewClothing.brand}</p>
        <p>Size: {viewClothing.size}</p>
        <p>Condition: {viewClothing.condition}</p>
        <p>Color: {viewClothing.color}</p>
        <p>Value: {viewClothing.value}</p>
        <button onClick={() => viewClothing.handleDeleteClothing(viewClothing.id)}>
          Delete this piece
        </button>
      </div>
    );
  }
}

export default ClothingDetailsComponent;
