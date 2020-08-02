import React from "react";
import "./input.scss";

export default function Input(props) {
  return (
    <div className="container">
      <label htmlFor={props.label}>{props.label}</label>
      <input
        type="text"
        className="input"
        name={props.label}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  );
}
