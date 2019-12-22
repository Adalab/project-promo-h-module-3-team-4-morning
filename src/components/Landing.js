import React from "react";
import "../stylesheets/landing.scss";
import "../stylesheets/mixins.scss";
import "../stylesheets/variables.scss";
import logo from "../images/logo.svg";
import Footer from "./Footer";
import MenuItem from "./LandingMenuItem";

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
            <MenuItem
              text="Diseña"
              className="menu__item--fav far fa-object-ungroup"
            />
            <MenuItem
              text="Rellena"
              className="menu__item--fav far fa-keyboard"
            />
            <MenuItem
              text="Comparte"
              className="menu__item--fav fas fa-share-alt"
            />
          </ul>
        </nav>
        <a className="landing__button" href="./profile.html" title="Comenzar">
          Comenzar
        </a>
      </main>

      <Footer />
    </div>
  );
}

export default Landing;
