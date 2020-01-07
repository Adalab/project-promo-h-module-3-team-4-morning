import React from "react";
import "../stylesheets/design.scss";
import Palette from "./Palette";

class Design extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      palette: "",
      isChecked: false
    };
    this.paletteHandler = this.paletteHandler.bind(this);
    this.paletteClickHandler = this.paletteClickHandler.bind(this);
    this.toggleChange = this.toggleChange.bind(this);
  }
  toggleChange = (ev) => {
    if (this.state.palette === ev.target.id) {
      return ev.target.checked = true
    } else {
      return ev.target.checked = false
    }
  }
  paletteHandler(ev) {
    console.log(ev.target.id)
    const id = ev.target.id
    this.setState({
      palette: id,
    });
    // return ev.target.checked = 'checked';
  }


  render() {
    return (
      <fieldset className="design-box">
        <h3 className="design-box__title">Colores</h3>
        <div className="design-box__themes">
          <Palette paletteHandler={this.paletteHandler} htmlFor="1" checked={this.toggleChange()} value="1" color1="colors colors--green1" color2="colors colors--green2" color3="colors colors--green3" />
          <Palette paletteHandler={this.paletteHandler} htmlFor="2" checked={this.toggleChange} value="2" color1="colors colors--red1" color2="colors colors--red2" color3="colors colors--red3" />
          <Palette paletteHandler={this.paletteHandler} htmlFor="3" checked={this.toggleChange} value="3" color1="colors colors--gray1" color2="colors colors--gray2" color3="colors colors--gray3" />
        </div>
        <p>{this.state.palette}</p>
      </fieldset>
    );
  }
}

export default Design;
