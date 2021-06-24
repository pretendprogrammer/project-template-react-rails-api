import React, { Component } from "react";
import ClothingComponent from "../Component/ClothingComponent";

class ClosetPreviewContainer extends Component {

  // this only sometimes works??? clothes submitted to swap do not always disappear from closet preview post-submit

  componentDidMount() {
    if(this.props.currentUser.id) {
      this.props.getUserClothing(this.props.currentUser)
    }
  }

  render() {
    return (
      <div>
        {this.props.clothings.map((clothing) => (
          <ClothingComponent clothing={clothing} key={clothing.id} parent={"closetPreviewContainer"} {...this.props.routerProps}/>
        ))}
        <button onClick={() =>
          this.props.routerProps.history.push("/closet")
        }>Browse Your Closet</button>
      </div>
    );
  }
}

export default ClosetPreviewContainer;
