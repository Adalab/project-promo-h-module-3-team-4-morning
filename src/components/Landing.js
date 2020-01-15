import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/landing.scss";
import MenuItem from "./LandingMenuItem";
import { faKeyboard, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { faObjectUngroup } from '@fortawesome/free-regular-svg-icons';

function Landing() {
  return (
    <div className="landingContainer">
      <main className="landing">
        <img
          className="landing__image"
          src="./assets/images/logoheader.svg"
          alt="Logo del Header"
        />
        <h1 className="landing__title">Crea tu tarjeta de visita</h1>
        <h2 className="landing__text">
          Crea mejores contactos profesionales de forma fácil y cómoda
        </h2>
        <nav className="landing__menu">
          <ul className="menu__list">
            <MenuItem text="Diseña" icon={faObjectUngroup} />
            <MenuItem text="Rellena" icon={faKeyboard} />
            <MenuItem text="Comparte" icon={faShareAlt} />
          </ul>
        </nav>
        <Link className="landing__button" to="/create-card" title="Comenzar">
          Comenzar
        </Link>
      </main>
    </div>
  );
}

export default Landing;
