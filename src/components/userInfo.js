import React from "react";

class UserInfo extends React.Component {
  state = {
    name: "Van Phu Tin",
    address: "Tin FullStack",
    age: 21,
  };
  handleClick = (event) => {
    //dùng arowFunction để fix lỗi
    console.log("click me my button");

    //merge state => react class
    this.setState({
      name: "Tin Devoloper",
      age: Math.floor(Math.random() * 100 + 1),
    });
  };
  handleOnChangeInput(event) {
    this.setState({
      name: event.target.value,
    });
  }
  handleOnChangeAge(event) {
    this.setState({
      age: event.target.value,
    });
  }
  handleOnChangeSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        My name is {this.state.name} and I {this.state.age} old
        <button onClick={this.handleClick}>click me</button>
        <button onMouseOver={this.handOnMouseOver}>Hover me</button>
        <form
          action=""
          onSubmit={(event) => {
            this.handleOnChangeSubmit(event);
          }}
        >
          <label htmlFor="">Enter name ...</label>
          <input
            type="text"
            placeholder="what your name ?"
            onChange={(event) => this.handleOnChangeInput(event)}
          />
          <br />
          <label htmlFor="">Enter age ...</label>
          <input
            type="text"
            placeholder="enter age ?"
            onChange={(event) => this.handleOnChangeAge(event)}
          />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default UserInfo;
