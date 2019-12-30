import React from "react";
import "../stylesheets/fill.scss";
import Input from "./Input";
import Image from "./Image"

class Fill extends React.Component {


  render() {
    return (
      <fieldset className="fill">
        <Input htmlFor="name" type="text" text="Nombre completo" name="name" placeholder="Ej: Sally Jill" value={this.props.name} handleChange={this.props.handleChange} />
        <Input htmlFor="job" type="text" text="Puesto" name="job" placeholder="Ej: Front-end unicorn" value={this.props.job} handleChange={this.props.handleChange} />
        <Image image={this.props.image} fileSelectedHandler={this.props.fileSelectedHandler} />
        <Input htmlFor="email" type="email" text="Email" name="email" placeholder="Ej: sally-hill@gmail.com" value={this.props.email} handleChange={this.props.handleChange} />
        <Input htmlFor="phone" type="tel" text="Teléfono" name="phone" placeholder="Ej: 555-55-55-55" pattern="[0-9]{9}" value={this.props.phone} handleChange={this.props.handleChange} />
        <Input htmlFor="linkedin" type="text" text="Linkedin" name="linkedin" placeholder="Ej: sally.hill" value={this.props.linkedin} handleChange={this.props.handleChange} />
        <Input htmlFor="github" type="text" text="Github" name="github" placeholder="Ej: @sally-hill" value={this.props.github} handleChange={this.props.handleChange} />
      </fieldset>
    );
  }
}

export default Fill;
