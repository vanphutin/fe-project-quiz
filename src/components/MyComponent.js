// can use : class component or function component
import React, { useState } from "react";
import DisplayInfo from "./DisplayInfo";
import AddUserInfo from "./AddUserInfo";

// class MyComponent extends React.Component {
//   state = {
//     listUser: [
//       { ID: 1, name: "van phu tin", age: "18" },
//       { ID: 2, name: "tin dev", age: "21" },
//       { ID: 3, name: "tin fullStack", age: "22" },
//     ],
//   };
//   handleAddNewUser = (userObj) => {
//     console.log(userObj);
//     this.setState({
//       listUser: [userObj, ...this.state.listUser],
//     });
//   };
//   handleDeleteUser = (userId) => {
//     const listUserClone = [...this.state.listUser];
//     const updatedList = listUserClone.filter((item) => item.ID !== userId);
//     this.setState({
//       listUser: updatedList,
//     });
//   };

//   //JSX
//   render() {
//     return (
//       <>
//         <div className="a">
//           <AddUserInfo handleAddNewUser={this.handleAddNewUser} />
//           <DisplayInfo
//             listUser={this.state.listUser}
//             handleDeleteUser={this.handleDeleteUser}
//           />
//         </div>
//         <div className="b"></div>
//       </>
//     );
//   }
// }

const MyComponent = (props) => {
  const [listUser, setListUser] = useState([
    { ID: 1, name: "van phu tin", age: "18" },
    { ID: 2, name: "tin dev", age: "21" },
    { ID: 3, name: "tin fullStack", age: "22" },
  ]);
  const handleAddNewUser = (userObj) => {
    setListUser([userObj, ...listUser]);
    // this.setState({
    //   listUser: [userObj, ...this.state.listUser],
    // });
  };
  const handleDeleteUser = (userId) => {
    const listUserClone = listUser;
    const updatedList = listUserClone.filter((item) => item.ID !== userId);
    setListUser(updatedList);
    // this.setState({
    //   listUser: updatedList,
    // });
  };
  return (
    <>
      <div className="a">
        <AddUserInfo handleAddNewUser={handleAddNewUser} />
        <DisplayInfo listUser={listUser} handleDeleteUser={handleDeleteUser} />
      </div>
      <div className="b"></div>
    </>
  );
};

export default MyComponent;
