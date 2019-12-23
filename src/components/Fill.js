import React from "react";
import "../stylesheets/mainStyle.scss";
import Input from "./Input";

class Fill extends React.Component {
  render() {
    return (
      <fieldset className="fill">
        <Input htmlFor="name" type="text" text="Nombre completo" name="name" placeholder="Ej: Sally Jill" />
        <Input htmlFor="job" type="text" text="Puesto" name="job" placeholder="Ej: Front-end unicorn" />
        <label className="fill__lable" htmlFor="image">
          Imagen de perfil
        </label>
        <div className="fill__image">
          <button className="fill__image--button js-fill__image-btn">Añadir imagen</button>
          <input type="file" name="" id="img-selector" className="hidden js-fill__image-upload-btn" />
          <div className="fill__image--miniature"></div>
        </div>
        <Input htmlFor="email" type="email" text="Email" name="email" placeholder="Ej: sally-hill@gmail.com" />
        <Input htmlFor="phone" type="tel" text="Teléfono" name="phone" placeholder="Ej: 555-55-55-55" pattern="[0-9]{9}" />
        <Input htmlFor="linkedin" type="text" text="Linkedin" name="linkedin" placeholder="Ej: sally.hill" />
        <Input htmlFor="github" type="text" text="Github" name="github" placeholder="Ej: @sally-hill" />
      </fieldset>
    );
  }
}

export default Fill;
