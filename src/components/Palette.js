import React from "react";
import "../stylesheets/palette.scss";

const Palette = props => {
  const inputChangeHandler = ev => {
    props.inputChangeHandler({
      value: ev.target.value,
      id: 'palette'
    });
  }

  return (
    <div>
      <label className="design-box__theme" htmlFor={props.htmlFor}>
        <input onChange={inputChangeHandler} id={props.htmlFor} type="radio" checked={props.checked} value={props.value} name="palette" />
        <div className="colors__container">
          <div className={props.color1}></div>
          <div className={props.color2}></div>
          <div className={props.color3}></div>
        </div>
      </label>
    </div>
  );
};


export default Palette;
