import React from "react";
import "./DisplayInfo.scss";
import logo from "./../logo.svg";
// class DisplayInfo extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isShowListUser: true,
//     };
//   }
//   handleShowHide = () => {
//     this.setState({
//       isShowListUser: !this.state.isShowListUser,
//     });
//   };

//   componentDidMount() {
//     setTimeout(() => {
//       document.title = "Văn Phú Tín";
//     }, 3000);
//   }
//   componentDidUpdate(prevProps, prevState, snapshot) {
//     alert("changed sucsecced !");
//   }
//   render() {
//     //props => properties
//     const { listUser } = this.props;
//     console.log(listUser);
//     return (
//       <div className="display-info-container">
//         <img src={logo} alt="" />
//         <div>
//           <button
//             onClick={(event) => {
//               this.handleShowHide(event);
//             }}
//           >
//             {this.state.isShowListUser === true
//               ? " hide list user"
//               : "show list user"}
//           </button>
//         </div>
//         {this.state.isShowListUser && (
//           <>
//             {listUser.map((user) => {
//               return (
//                 <div key={user.ID} className={+user.age > 18 ? "green" : "red"}>
//                   <div>my name is {user.name} </div>
//                   <div> i am {user.age} year old</div>
//                   <button onClick={() => this.props.handleDeleteUser(user.ID)}>
//                     Delete
//                   </button>
//                   <hr />
//                 </div>
//               );
//               {
//               }
//             })}
//           </>
//         )}
//       </div>
//     );
//   }
// }

//chỉ dùng this cho class <=>
const DisplayInfo = (props) => {
  const { listUser } = props;
  return (
    <div className="display-info-container">
      {true && (
        <>
          {listUser.map((user) => {
            return (
              <div key={user.ID} className={+user.age > 18 ? "green" : "red"}>
                <div>my name is {user.name} </div>
                <div> i am {user.age} year old</div>
                <button onClick={() => props.handleDeleteUser(user.ID)}>
                  Delete
                </button>
                <hr />
              </div>
            );
            {
            }
          })}
        </>
      )}
    </div>
  );
};

export default DisplayInfo;
