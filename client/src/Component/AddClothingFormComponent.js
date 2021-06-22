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
      image_url: "",
      category: "",
      user_id: ""
    };
  }

  componentDidMount() {
    this.setState({
      user_id: this.props.currentUserId
    })
  }

  render() {
    return (
      <div>
        <h3>Add a New Piece to Your Closet</h3>
        <form onSubmit={(event) => {
          event.preventDefault()
          this.props.addClothing(this.state)
        }}>
          <label htmlFor="name">Name</label>
          <input onChange={(event) => this.setState({name: event.target.value})} type="text" id="name" name="name" value={this.state.name} />
          <label htmlFor="color">Color</label>
          <input onChange={(event) => this.setState({color: event.target.value})}type="text" id="color" name="color" value={this.state.color} />
          <label htmlFor="brand">Brand</label>
          <input onChange={(event) => this.setState({brand: event.target.value})}type="text" id="brand" name="brand" value={this.state.brand} />
          <label htmlFor="size">Size</label>
          <select onChange={(event) => this.setState({size: event.target.value})}id="size" name="size" >
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
          <select onChange={(event) => this.setState({condition: event.target.value})}id="condition" name="condition">
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
            onChange={(event) => this.setState({description: event.target.value})}
            type="textarea"
            id="description"
            name="description"
            value={this.state.description}
          />
          <label htmlFor="value">Value</label>
          <input onChange={(event) => this.setState({value: event.target.value})}type="text" id="value" name="value" value={this.state.value} />
          <label htmlFor="image_url">Picture</label>
          <input
            onChange={(event) => this.setState({image_url: event.target.value})}
            type="text"
            id="image_url"
            name="image_url"
            value={this.state.image_url}
          />
          <label htmlFor="category">Category</label>
          <select onChange={(event) => this.setState({category: event.target.value})}id="category" name="category">
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
          <input type="submit" value="Add!" />
        </form>
      </div>
    );
  }
}

export default AddClothingFormComponent;
