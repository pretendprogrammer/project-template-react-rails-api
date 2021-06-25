import React, { Component } from "react";
import { Container, Header, Button, Image, Card } from 'semantic-ui-react'


class FriendComponent extends Component {

  constructor(){
    super()
    this.state = {
      currentClosetUserInFriendComponent: {}
    }
  }

  componentDidMount(){
    this.interval = setInterval(() => {
      this.setState({currentClosetUserInFriendComponent: this.props.currentClosetUser})
    }, 250)
  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }

  render() {
    return (
      <Card>
        <Header className="friend-card" as="h3">{this.props.friend.username}</Header>
        <Image style={{objectFit: "fill"}} className="card-image" src={this.props.friend.image_url}/>
        <Card.Content extra>
        <Button className="view-closet-button"
        onClick={() => {
          console.log('friend component')
          // this.props.getUserClothing(this.props.friend)
          // let x = false
          
          // while (!x) {
          //   debugger
          //   if (this.props.friend.id === this.props.currentClosetUser.id) {
          //     x = true
          //     this.props.history.push("/closet")
          //   } else {
          //     x = false
          //   }
          // }
          // while(this.props.friend.id)
            this.props.history.push({pathname: "/closet",  state: {currentClosetUser: this.props.friend, parent: "FriendComponent"}})
          
          // {this.props.friend.id === this.state.currentClosetUserInFriendComponent.id
          //   ? () => this.props.history.push("/closet")
          //   : null}
          }}
        >View Closet</Button>
      </Card.Content>
      </Card>
    );
  }
}

export default FriendComponent;
