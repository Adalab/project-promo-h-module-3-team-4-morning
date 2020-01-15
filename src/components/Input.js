import React from "react";
import "../stylesheets/input.scss";

const Input = props => {
  const inputChangeHandler = ev => {
    props.inputChangeHandler({
      value: ev.target.value,
      id: ev.target.id
    });
  }

  return (
    <div>
      <label className="fill__lable" htmlFor={props.htmlFor}>
        {props.text}
      </label>
      <input onChange={inputChangeHandler} className="fill__box" type={props.type} id={props.htmlFor} name={props.name} placeholder={props.placeholder} pattern={props.pattern} value={props.value} required />
    </div>
  );
};


export default Input;