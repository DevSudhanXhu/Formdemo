import React, { Component } from "react";

class Forms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      password: "",
      confirm: "",
    };
  }

  handleuserName = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };
  handlepassword = (pass) => {
    this.setState({
      password: pass.target.value,
    });
  };
  handleconfirm = (conf) => {
    this.setState({
      confirm: conf.target.value,
    });
  };

  handleSubmit = () => {
    alert(`${this.state.userName}`);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <br></br>
          <label>Username</label>
          <input
            type="text"
            value={this.state.userName}
            onChange={this.handleuserName}
          ></input>
          <br></br>
          <input type="submit"></input>
          <br></br>
          <label>Password</label>
          <input
            type="password"
            value={this.state.password}
            onChange={this.handlepassword}
          ></input>
          <br></br>
          <br></br>
          <label>Confirm Password</label>
          <input
            type="password"
            value={this.state.confirm}
            onChange={this.handleconfirm}
          ></input>
          <input type="submit"></input>
        </div>
      </form>
    );
  }
}
export default Forms;
