// can use : class component or function component
import React from "react";
import UserInfo from "./userInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
  state = {
    listUser: [
      { ID: 1, name: "van phu tin", age: "18" },
      { ID: 2, name: "tin dev", age: "21" },
      { ID: 3, name: "tin fullStack", age: "22" },
    ],
  };
  //JSX
  render() {
    return (
      <div>
        <UserInfo />
        <DisplayInfo listUser={this.state.listUser} />
      </div>
    );
  }
}

export default MyComponent;
