import React, { Component } from "react";

class AddClothingFormComponent extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      color: "",
      brand: "",
      size: "",
      condition: "",
      description: "",
      value: "",
      imageURL: "",
      category: "",
    };
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={this.state.name} />
          <label htmlFor="color">Color</label>
          <input type="text" id="color" name="color" value={this.state.color} />
          <label htmlFor="brand">Brand</label>
          <input type="text" id="brand" name="brand" value={this.state.brand} />
          <label htmlFor="size">Size</label>
          <select id="size" name="size">
            <option selected="selected" disabled>
              Select Size
            </option>
            <option value="xs">XS</option>
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
          </select>
          <label htmlFor="condition">Condition</label>
          <select id="condition" name="condition">
            <option selected="selected" disabled>
              Select Condition
            </option>
            <option value="new">New</option>
            <option value="likeNew">Like New</option>
            <option value="gentlyUsed">Gently Used</option>
            <option value="normalWear">Normal Wear</option>
            <option value="destroyedChic">Destroyed Chic</option>
          </select>
          <label htmlFor="description">Description</label>
          <input
            type="textarea"
            id="description"
            name="description"
            value={this.state.description}
          />
          <label htmlFor="value">Value</label>
          <input type="text" id="value" name="value" value={this.state.value} />
          <label htmlFor="imageURL">Picture</label>
          <input
            type="text"
            id="imageURL"
            name="imageURL"
            value={this.state.imageURL}
          />
          <label htmlFor="category">Category</label>
          <label htmlFor="condition">Condition</label>
          <select id="condition" name="condition">
            <option selected="selected" disabled>
              Select Category
            </option>
            <option value="shirt">Shirt</option>
            <option value="bottoms">Bottoms</option>
            <option value="shoes">Shoes</option>
            <option value="dress">Dress</option>
            <option value="accessory">Accessory</option>
            <option value="socks">Socks</option>
          </select>
          <input type="submit" value="Swap!" />
        </form>
      </div>
    );
  }
}

export default AddClothingFormComponent;
