import React from "react";
import "../stylesheets/input.scss";

class Input extends React.Component {

  render() {
    return (
      <div>
        <label className="fill__lable" htmlFor={this.props.htmlFor}>
          {this.props.text}
        </label>
        <input onChange={this.props.handleChange} className="fill__box js-input" type={this.props.type} id={this.props.id} name={this.props.name} placeholder={this.props.placeholder} pattern={this.props.pattern} value={this.props.value} required />
        <p>El value es: {this.props.value}</p>
      </div>
    );
  }
}

export default Input;
