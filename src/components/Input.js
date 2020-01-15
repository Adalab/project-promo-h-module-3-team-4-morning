import React from "react";
import "../stylesheets/input.scss";
import PropTypes from "prop-types";

class Input extends React.Component {
  render() {
    return (
      <div>
        <label className="fill__lable" htmlFor={this.props.htmlFor}>
          {this.props.text}
        </label>
        <input onChange={this.props.handleInputChange} className="fill__box" type={this.props.type} id={this.props.htmlFor} name={this.props.name} placeholder={this.props.placeholder} pattern={this.props.pattern} value={this.props.value} required />
      </div>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string,
  job: PropTypes.string,
  photo: PropTypes.element,
  email: PropTypes.string,
  phone: PropTypes.string,
  linkedin: PropTypes.string,
  github: PropTypes.string
};

export default Input;
