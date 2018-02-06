import React from "react";

const Button = props => (
  <button className={`button button--${props.color}`} style={props.style}>
    {props.label}
  </button>
);

export default Button;
