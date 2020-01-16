import React from "react";
import "../stylesheets/palette.scss";
import PropTypes from "prop-types";

const Palette = props => {
  const inputChangeHandler = ev => {
    props.inputChangeHandler({
      value: ev.target.value,
      id: "palette"
    });
  };

  const { htmlFor, checked, value, color1, color2, color3 } = props;
  return (
    <div>
      <label className="design-box__theme" htmlFor={htmlFor}>
        <input onChange={inputChangeHandler} id={htmlFor} type="radio" checked={checked} value={value} name="palette" />
        <div className="colors__container">
          <div className={color1}></div>
          <div className={color2}></div>
          <div className={color3}></div>
        </div>
      </label>
    </div>
  );
};

Palette.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  inputChangeHandler: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  color1: PropTypes.string.isRequired,
  color2: PropTypes.string.isRequired,
  color3: PropTypes.string.isRequired
};

export default Palette;
