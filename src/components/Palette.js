import React from "react";
import "../stylesheets/palette.scss";


class Palette extends React.Component {

  render() {
    return (
      <div>
        <label
          className="design-box__theme"
          htmlFor={this.props.htmlFor}>
          <input
            className="js-input-color"
            name="palette"
            type="radio"
            id={this.props.htmlFor}
            checked={this.props.checked}
            value={this.props.value}
            onClick={this.props.paletteInputHandler}
          />
          <div className="colors__container">
            <div className={this.props.color1}></div>
            <div className={this.props.color2}></div>
            <div className={this.props.color3}></div>
          </div>
        </label>
      </div>
    );
  }
}

export default Palette;
