import React from "react";
import "../stylesheets/fill.scss";
import Input from "./Input";
import Image from "./Image";

class Fill extends React.Component {
  render() {
    return (
      <fieldset className="fill">
        <Input handleInputChange={this.props.handleInputChange} value={this.props.name} htmlFor="name" type="text" text="Nombre completo" name="name" placeholder="Ej: Sally Jill" />
        <Input handleInputChange={this.props.handleInputChange} value={this.props.job} htmlFor="job" type="text" text="Puesto" name="job" placeholder="Ej: Front-end unicorn" />
        <Image photo={this.props.photo} fileSelectedHandler={this.props.fileSelectedHandler} />
        <Input handleInputChange={this.props.handleInputChange} value={this.props.email} htmlFor="email" type="email" text="Email" name="email" placeholder="Ej: sally-hill@gmail.com" />
        <Input handleInputChange={this.props.handleInputChange} value={this.props.phone} htmlFor="phone" type="tel" text="Teléfono" name="phone" placeholder="Ej: 555-55-55-55" pattern="[0-9]{9}" />
        <Input handleInputChange={this.props.handleInputChange} value={this.props.linkedin} htmlFor="linkedin" type="text" text="Linkedin" name="linkedin" placeholder="Ej: sally.hill" />
        <Input handleInputChange={this.props.handleInputChange} value={this.props.github} htmlFor="github" type="text" text="Github" name="github" placeholder="Ej: @sally-hill" />
      </fieldset>
    );
  }
}

export default Fill;
