import React, { Component } from "react";
import "../stylesheets/image.scss";
import PropTypes from "prop-types";

class Image extends Component {
  constructor(props) {
    super(props);
    this.fr = new FileReader();
    this.handleClick = this.handleClick.bind(this);
    this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
  }
  handleClick(ev) {
    ev.preventDefault();
    this.fileInput.click();
  }
  fileSelectedHandler(ev) {
    let myFile = ev.target.files[0];
    this.fr.addEventListener("load", this.inputChangeHandler);
    this.fr.readAsDataURL(myFile);
  }

  inputChangeHandler() {
    const imageData = this.fr.result;
    this.props.inputChangeHandler({
      value: imageData,
      id: "photo"
    });
  }

  render() {
    return (
      <div>
        <label className="fill__lable" htmlFor="image">
          Imagen de perfil
        </label>
        <div className="fill__image">
          <button type="button" onClick={this.handleClick} className="fill__image--button">
            Añadir imagen
          </button>
          <input onChange={this.fileSelectedHandler} type="file" name="" id="img-selector" className="fill__image--input" ref={fileInput => (this.fileInput = fileInput)} />
          <div className="fill__image--miniature" style={{ backgroundImage: `url(${this.props.photo})` }}></div>
        </div>
      </div>
    );
  }
}

Image.propTypes = {
  handleClick: PropTypes.string,
  fileSelectedHandler: PropTypes.func,
  fileInput: PropTypes.string,
  photo: PropTypes.string
};

export default Image;
