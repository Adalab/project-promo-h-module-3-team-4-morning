import React from "react";
import "../stylesheets/preview.scss";
import Icon from "./Icon";
import defaultImage from "../images/default-profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";

class Preview extends React.Component {
  render() {
    return (
      <section className="preview">
        <div className="preview__container">
          <button onClick={this.props.resetHandler} className="preview__reset">
            <FontAwesomeIcon className="preview__icon" icon={faTrashAlt} />
            reset
          </button>
          <article className={`preview__display palette${this.props.palette}`}>
            <header className="preview__display--header">
              <div className="preview__display--container">
                <h3 className="preview__display--title">{this.props.name || "Nombre Apellido"}</h3>
                <h3 className="preview__display--subtitle">{this.props.job || "Front-end Developer"}</h3>
              </div>
            </header>
            <div className="preview__display--img" style={{ backgroundImage: `url(${this.props.photo || defaultImage})` }}></div>
            <footer className="preview__display--footer menu">
              <ul className="menu__list">
                <Icon href={`tel:+${this.props.phone}`} icon={faMobileAlt} classLi={`menu__items--phone ${this.props.phone ? "" : "filter"}`} />
                <Icon href={`mailto:${this.props.email}`} icon={faEnvelope} classLi={`menu__items--email ${this.props.email ? "" : "filter"}`} />
                <Icon href={`https://www.linkedin.com/in/${this.props.linkedin}`} icon={faLinkedinIn} classLi={`menu__items--linkedin ${this.props.linkedin ? "" : "filter"}`} />
                <Icon href={`https://www.github.com/${this.props.github}`} icon={faGithubAlt} classLi={`menu__items--github ${this.props.github ? "" : "filter"}`} />
              </ul>
            </footer>
          </article>
        </div>
      </section>
    );
  }
}

Preview.propTypes = {
  defaultImage: PropTypes.string
};

export default Preview;
