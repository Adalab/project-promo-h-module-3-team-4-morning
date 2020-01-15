import React from "react";
import "../stylesheets/input.scss";
import PropTypes from "prop-types";

const Input = props => {
  const inputChangeHandler = ev => {
    props.inputChangeHandler({
      value: ev.target.value,
      id: ev.target.id
    });
  };

  return (
    <div>
      <label className="fill__lable" htmlFor={props.htmlFor}>
        {props.text}
      </label>
      <input onChange={inputChangeHandler} className="fill__box" type={props.type} id={props.htmlFor} name={props.name} placeholder={props.placeholder} pattern={props.pattern} value={props.value} required />
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  job: PropTypes.string,
  photo: PropTypes.element,
  email: PropTypes.string,
  phone: PropTypes.string,
  linkedin: PropTypes.string,
  github: PropTypes.string
};

export default Input;
