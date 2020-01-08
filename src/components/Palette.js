import React from "react";
import "../stylesheets/palette.scss";


class Palette extends React.Component {
  render() {
    return (
      <div>
        <label className="design-box__theme" htmlFor={this.props.htmlFor}>
          <input className="js-input-color" id={this.props.htmlFor} type="radio" checked={this.props.checked} value={this.props.value} name="palette" />
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
