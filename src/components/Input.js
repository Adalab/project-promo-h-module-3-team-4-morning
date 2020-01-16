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
  const { text, type, htmlFor, name, placeholder, pattern, value } = props;

  const star = <span class="fill__star">*</span>
  return (
    <div>
      <label className="fill__lable" htmlFor={props.htmlFor}>
        {text}{star}
      </label>
      <input onChange={inputChangeHandler} className="fill__box" type={type} id={htmlFor} name={name} placeholder={placeholder} pattern={pattern} value={value} required />
    </div>
  );
};

Input.propTypes = {
  inputChangeHandler: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired
};

export default Input;
