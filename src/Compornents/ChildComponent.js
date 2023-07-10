import React from "react";

function ChildComponent(props) {
  return (
    <div>
      <button onClick={props.func}>Click Here</button>
    </div>
  );
}

export default ChildComponent;
