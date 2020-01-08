import React from "react";
import "../stylesheets/header.scss";
import logo from "../images/logoheader.svg";
import { Link } from "react-router-dom";
class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Link className="header__link" to="/" text="index link">
          <img
            className="header__logo"
            src={logo}
            alt="logo awesome profile cards"
          />
        </Link>
      </header>
    );
  }
}

export default Header;
