import React from "react";
import UserInfo from "./userInfo";
class DisplayInfo extends React.Component {
  render() {
    //props => properties
    const { name, age } = this.props;
    return (
      <div>
        <br />
        <div>Display list user: </div>
        <hr />
        <div>my name is {this.props.name}</div>
        <div> i am {age} year old</div>
      </div>
    );
  }
}

export default DisplayInfo;
