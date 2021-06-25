import React, { Component } from "react";
import { Container, Header, Button, Card, Form, Input, Grid } from 'semantic-ui-react'

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
      <Container className="centered-container content-margin">
        <Header as='h1'>Add a New Piece to Your Closet</Header>
        <Grid centered>
          <Form className="form-width" onSubmit={(event) => {
            event.preventDefault()
            this.props.addClothing(this.state)
          }}>
            <Form.Input onChange={(event) => this.setState({name: event.target.value})} placeholder='Name' type="text" id="name" name="name" value={this.state.name} />
            <Form.Input onChange={(event) => this.setState({color: event.target.value})} placeholder='Color' type="text" id="color" name="color" value={this.state.color} />
            <Form.Input onChange={(event) => this.setState({brand: event.target.value})} placeholder='Brand' type="text" id="brand" name="brand" value={this.state.brand} />
            <Form.Field control="select" onChange={(event) => this.setState({size: event.target.value})} placeholder='Size' id="size" name="size" >
              <option selected="selected" disabled>
                Select Size
              </option>
              <option value="xs">XS</option>
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
              <option value="xl">XL</option>
            </Form.Field>
            <Form.Field option="select" onChange={(event) => this.setState({condition: event.target.value})} control='select' placeholder='Condition' id="condition" name="condition">
              <option selected="selected" disabled>
                Select Condition
              </option>
              <option value="new">New</option>
              <option value="likeNew">Like New</option>
              <option value="gentlyUsed">Gently Used</option>
              <option value="normalWear">Normal Wear</option>
              <option value="destroyedChic">Destroyed Chic</option>
            </Form.Field>
            <Form.Input
              onChange={(event) => this.setState({description: event.target.value})}
              type="textarea"
              id="description"
              name="description"
              value={this.state.description}
              placeholder='Description'
            />
            <Form.Input onChange={(event) => this.setState({value: event.target.value})} placeholder='Value' type="number" id="value" name="value" value={this.state.value} />
            <Form.Input
              onChange={(event) => this.setState({image_url: event.target.value})}
              type="text"
              id="image_url"
              name="image_url"
              value={this.state.image_url}
              placeholder='Picture'
            />
            <Form.Field onChange={(event) => this.setState({category: event.target.value})} control='select' placeholder='Category' id="category" name="category">
              <option selected="selected" disabled>
                Select Category
              </option>
              <option value="shirt">Shirt</option>
              <option value="bottoms">Bottoms</option>
              <option value="shoes">Shoes</option>
              <option value="dress">Dress</option>
              <option value="accessory">Accessory</option>
              <option value="socks">Socks</option>
            </Form.Field>
            <Input className='form-button input-button' type="submit" value="Add!" />
          </Form>
          </Grid>
      </Container>
    );
  }
}

export default AddClothingFormComponent;
