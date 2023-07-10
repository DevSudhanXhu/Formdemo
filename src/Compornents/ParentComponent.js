import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.Greeting = this.Greeting.bind(this);
    this.state = {
      name: "Super Class",
    };
  }

  Greeting = () => {
    alert("HI FROM SUPER CLASS");
  };

  render() {
    return (
      <div>
        <ChildComponent func={this.Greeting}></ChildComponent>
      </div>
    );
  }
}
export default ParentComponent;
