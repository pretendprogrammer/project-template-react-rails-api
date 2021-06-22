import React, { Component } from "react";

class ClothingDetailsComponent extends Component {
  render() {
    return (
      <div>
        {this.props.name}
        <img src={this.props.image_url} alt={this.props.name} />
        <p>{this.props.description}</p>
        <p>Brand: {this.props.brand}</p>
        <p>Size: {this.props.size}</p>
        <p>Condition: {this.props.condition}</p>
        <p>Color: {this.props.color}</p>
        <p>Value: {this.props.value}</p>
        <button onClick={() => this.props.handleDeleteClothing(this.props.id)}>
          Delete this piece
        </button>
      </div>
    );
  }
}

export default ClothingDetailsComponent;
