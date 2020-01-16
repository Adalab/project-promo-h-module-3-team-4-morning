import React from "react";
import "../stylesheets/design.scss";
import Palette from "./Palette";
import PropTypes from "prop-types";

const Design = props => {
  const { inputChangeHandler, palette } = props;

  return (
    <fieldset className="design-box closed">
      <h3 className="design-box__title">Colores</h3>
      <div className="design-box__themes">
        <Palette inputChangeHandler={inputChangeHandler} htmlFor="1" checked={palette === "1"} value="1" color1="colors colors--green1" color2="colors colors--green2" color3="colors colors--green3" />
        <Palette inputChangeHandler={inputChangeHandler} htmlFor="2" checked={palette === "2"} value="2" color1="colors colors--red1" color2="colors colors--red2" color3="colors colors--red3" />
        <Palette inputChangeHandler={inputChangeHandler} htmlFor="3" checked={palette === "3"} value="3" color1="colors colors--gray1" color2="colors colors--gray2" color3="colors colors--gray3" />
      </div>
    </fieldset>
  );
};

Design.propTypes = {
  inputChangeHandler: PropTypes.func.isRequired,
  palette: PropTypes.string.isRequired
};

export default Design;
