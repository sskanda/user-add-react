import React from "react";
import "./Error.css";

function Error(props) {
  return (
    <div id="error" onClick={props.onRemoveError}>
      <h1>{props.title}</h1>
    </div>
  );
}

export default Error;
