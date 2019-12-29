import React from "react";
import "../stylesheets/fill.scss";
import Input from "./Input";
import Image from "./Image"

class Fill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      job: '',
      email: '',
      phone: '',
      linkedin: '',
      github: ''

    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    const id = ev.target.id;
    const value = ev.target.value;
    console.log(ev.target);
    this.setState({
      [id]: value
    });
  }

  render() {
    return (
      <fieldset className="fill">
<<<<<<< HEAD
        <Input htmlFor="name" type="text" text="Nombre completo" id="name" name="name" placeholder="Ej: Sally Jill" value={this.state.name} handleChange={this.handleChange} />
        <Input htmlFor="job" type="text" text="Puesto" id="job" name="job" placeholder="Ej: Front-end unicorn" value={this.state.job} handleChange={this.handleChange} />
        <Image image={this.props.image} fileSelectedHandler={this.props.fileSelectedHandler} />
        <Input htmlFor="email" type="email" text="Email" id="email" name="email" placeholder="Ej: sally-hill@gmail.com" value={this.state.email} handleChange={this.handleChange} />
        <Input htmlFor="phone" type="tel" text="Teléfono" id="phone" name="phone" placeholder="Ej: 555-55-55-55" pattern="[0-9]{9}" value={this.state.phone} handleChange={this.handleChange} />
        <Input htmlFor="linkedin" type="text" text="Linkedin" id="linkedin" name="linkedin" placeholder="Ej: sally.hill" value={this.state.linkedin} handleChange={this.handleChange} />
        <Input htmlFor="github" type="text" text="Github" id="github" name="github" placeholder="Ej: @sally-hill" value={this.state.github} handleChange={this.handleChange} />
=======
        <Input htmlFor="name" type="text" text="Nombre completo" name="name" placeholder="Ej: Sally Jill" />
        <Input htmlFor="job" type="text" text="Puesto" name="job" placeholder="Ej: Front-end unicorn" />
        <Image image={this.props.image} fileSelectedHandler={this.props.fileSelectedHandler} />
        <Input htmlFor="email" type="email" text="Email" name="email" placeholder="Ej: sally-hill@gmail.com" />
        <Input htmlFor="phone" type="tel" text="Teléfono" name="phone" placeholder="Ej: 555-55-55-55" pattern="[0-9]{9}" />
        <Input htmlFor="linkedin" type="text" text="Linkedin" name="linkedin" placeholder="Ej: sally.hill" />
        <Input htmlFor="github" type="text" text="Github" name="github" placeholder="Ej: @sally-hill" />
>>>>>>> dev
      </fieldset>
    );
  }
}

export default Fill;
