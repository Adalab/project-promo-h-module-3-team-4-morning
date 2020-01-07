import React from "react";
import "../stylesheets/design.scss";
import Palette from "./Palette";

class Design extends React.Component {
  render() {
    return (
      <fieldset className="design-box">
        <h3 className="design-box__title">Colores</h3>
        <div className="design-box__themes">
          <Palette
            htmlFor="1"
            id="1"
            checked="checked"
            value="1"
            color1="colors colors--green1"
            color2="colors colors--green2"
            color3="colors colors--green3"
          />
          <Palette
            htmlFor="2"
            id="2"
            value="2"
            color1="colors colors--red1"
            color2="colors colors--red2"
            color3="colors colors--red3"
          />
          <Palette
            htmlFor="3"
            id="3"
            value="3"
            color1="colors colors--gray1"
            color2="colors colors--gray2"
            color3="colors colors--gray3"
          />
        </div>
      </fieldset>
    );
  }
}

export default Design;
