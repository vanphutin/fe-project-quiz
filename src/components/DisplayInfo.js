import React from "react";

class DisplayInfo extends React.Component {
  state = {
    isShowListUser: true,
  };
  handleShowHide = () => {
    this.setState({
      isShowListUser: !this.state.isShowListUser,
    });
  };
  render() {
    //props => properties
    const { listUser } = this.props;
    console.log(listUser);
    return (
      <div>
        <div>
          <button
            onClick={(event) => {
              this.handleShowHide(event);
            }}
          >
            {this.state.isShowListUser === true
              ? " hide list user"
              : "show list user"}
          </button>
        </div>
        {this.state.isShowListUser && (
          <div>
            {listUser.map((user) => {
              return (
                <div key={user.ID} className={+user.age > 18 ? "green" : "red"}>
                  <div>my name is {user.name} </div>
                  <div> i am {user.age} year old</div>
                  <hr />
                </div>
              );
              {
              }
            })}
          </div>
        )}
      </div>
    );
  }
}

export default DisplayInfo;
