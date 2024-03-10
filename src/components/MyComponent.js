// can use : class component or function component
import React from "react";
import UserInfo from "./userInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
  //JSX
  render() {
    return (
      <div>
        <UserInfo />
        <DisplayInfo name="Van Phu Tin" age="21" />
      </div>
    );
  }
}

export default MyComponent;
