import React from "react";
import "../stylesheets/input.scss";

const Input = props => {
  const inputChangeHandler = ev => {
    props.inputChangeHandler({
      value: ev.target.value,
      id: ev.target.id
    });
  }
  const { text, type, htmlFor, name, placeholder, pattern, value } = props
  return (
    <div>
      <label className="fill__lable" htmlFor={props.htmlFor}>
        {text}
      </label>
      <input
        onChange={inputChangeHandler}
        className="fill__box"
        type={type}
        id={htmlFor}
        name={name}
        placeholder={placeholder}
        pattern={pattern}
        value={value}
        required />
    </div>
  );
};


export default Input;