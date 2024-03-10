import React from "react";
import UserInfo from "./userInfo";
class DisplayInfo extends React.Component {
  render() {
    //props => properties
    const { listUser } = this.props;
    return (
      <div>
        {listUser.map((user) => {
          return (
            <div key={user.ID}>
              <div>my name is {user.name} </div>
              <div> i am {user.age} year old</div>
              <hr />
            </div>
          );
        })}
        {/* <br />
        <div>Display list user: </div>
        <hr />
        <div>my name is {this.props.name}</div>
        <div> i am {age} year old</div> */}
      </div>
    );
  }
}

export default DisplayInfo;
