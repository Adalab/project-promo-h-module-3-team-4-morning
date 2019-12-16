import React from "react";
import "../stylesheets/mainStyle.scss";

class Design extends React.Component {
  render() {
    return (
      <fieldset className="design-box hidden">
        <h3 className="design-box__title">Colores</h3>
        <div className="design-box__themes">
          <div>
            <label className="design-box__theme" htmlFor="1">
              <input className="js-input-color" id="1" type="radio" checked="checked" value="1" name="palette" />
              <div className="colors__container">
                <div className="colors colors--green1"></div>
                <div className="colors colors--green2"></div>
                <div className="colors colors--green3"></div>
              </div>
            </label>
          </div>
          <div>
            <label className="design-box__theme" htmlFor="2">
              <input className="js-input-color" id="2" type="radio" value="2" name="palette" />
              <div className="colors__container">
                <div className="colors colors--red1"></div>
                <div className="colors colors--red2"></div>
                <div className="colors colors--red3"></div>
              </div>
            </label>
          </div>
          <div>
            <label className="design-box__theme" htmlFor="3">
              <input className="js-input-color" id="3" type="radio" value="3" name="palette" />
              <div className="colors__container">
                <div className="colors colors--gray1"></div>
                <div className="colors colors--gray2"></div>
                <div className="colors colors--gray3"></div>
              </div>
            </label>
          </div>
        </div>
      </fieldset>
    );
  }
}

export default Design;
