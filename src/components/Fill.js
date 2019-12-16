import React from "react";
import "../stylesheets/mainStyle.scss";

class Fill extends React.Component {
  render() {
    return (
      <fieldset className="fill hidden">
        <label className="fill__lable" htmlFor="name">
          Nombre completo
        </label>
        <input className="fill__box js-input" type="text" id="name" name="name" placeholder="Ej: Sally Jill" required />
        <label className="fill__lable " htmlFor="job">
          Puesto
        </label>
        <input className="fill__box js-input" type="text" id="job" name="job" placeholder="Ej: Front-end unicorn" />
        <label className="fill__lable" htmlFor="image">
          Imagen de perfil
        </label>
        <div className="fill__image">
          <button className="fill__image--button js-fill__image-btn">Añadir imagen</button>
          <input type="file" name="" id="img-selector" className="hidden js-fill__image-upload-btn" />
          <div className="fill__image--miniature"></div>
        </div>
        <label className="fill__lable" htmlFor="email">
          Email
        </label>
        <input className="fill__box js-input" type="email" id="email" name="email" placeholder="Ej: sally-hill@gmail.com" required />
        <label className="fill__lable" htmlFor="phone">
          Teléfono
        </label>
        <input className="fill__box js-input" type="tel" id="phone" name="phone" placeholder="Ej: 555-55-55-55" pattern="[0-9]{9}" required />
        <label className="fill__lable" htmlFor="linkedin">
          Linkedin
        </label>
        <input className="fill__box js-input" type="text" id="linkedin" name="linkedin" placeholder="Ej: sally.hill" required />
        <label className="fill__lable" htmlFor="github">
          Github
        </label>
        <input className="fill__box js-input" type="text" id="github" name="github" placeholder="Ej: @sally-hill" required />
      </fieldset>
    );
  }
}

export default Fill;
