import React from "react";
import "../stylesheets/header.scss";
import logo from "../images/logoheader.svg";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <a className="header__link" href="./index.html" text="index link">
          <img className="header__logo" src={logo} alt="logo awesome profile cards" />
        </a>
      </header>
    );
  }
}

export default Header;
