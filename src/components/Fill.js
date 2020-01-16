import React from "react";
import "../stylesheets/fill.scss";
import Input from "./Input";
import Image from "./Image";
import PropTypes from "prop-types";


const Fill = props => {
  const { inputChangeHandler, name, job, photo, email, phone, linkedin, github } = props

  return (
    <fieldset className="fill">
      <Input
        inputChangeHandler={inputChangeHandler}
        value={name}
        htmlFor="name"
        type="text"
        text="Nombre completo"
        name="name"
        placeholder="Ej: Sally Jill"
      />
      <Input
        inputChangeHandler={inputChangeHandler}
        value={job}
        htmlFor="job"
        type="text"
        text="Puesto"
        name="job"
        placeholder="Ej: Front-end unicorn"
      />
      <Image
        inputChangeHandler={inputChangeHandler}
        photo={photo}
      />
      <Input
        inputChangeHandler={inputChangeHandler}
        value={email}
        htmlFor="email"
        type="email"
        text="Email"
        name="email"
        placeholder="Ej: sally-hill@gmail.com"
      />
      <Input
        inputChangeHandler={inputChangeHandler}
        value={phone}
        htmlFor="phone"
        type="tel"
        text="Teléfono"
        name="phone"
        placeholder="Ej: 555-55-55-55"
        pattern="[0-9]{9}"
      />
      <Input
        inputChangeHandler={inputChangeHandler}
        value={linkedin}
        htmlFor="linkedin"
        type="text"
        text="Linkedin"
        name="linkedin"
        placeholder="Ej: sally.hill"
      />
      <Input
        inputChangeHandler={inputChangeHandler}
        value={github}
        htmlFor="github"
        type="text"
        text="Github"
        name="github"
        placeholder="Ej: @sally-hill"
      />
    </fieldset>
  );
};


Fill.propTypes = {
  handleInputChange: PropTypes.func,
  name: PropTypes.string,
  job: PropTypes.string,
  photo: PropTypes.string,
  fileSelectedHandler: PropTypes.func,
  email: PropTypes.string,
  phone: PropTypes.string,
  linkedin: PropTypes.string,
  github: PropTypes.string
};

export default Fill;
