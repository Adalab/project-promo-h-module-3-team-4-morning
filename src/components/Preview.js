import React from "react";
import "../stylesheets/preview.scss";
import Icon from "./Icon";
import defaultImage from "../images/new-default-profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";

const Preview = props => {
  const { resetHandler, palette, name, job, photo, phone, email, linkedin, github } = props;
  return (
    <section className="preview">
      <div className="preview__container">
        <button onClick={resetHandler} className="preview__reset">
          <FontAwesomeIcon className="preview__icon" icon={faTrashAlt} />
          reset
        </button>
        <article className={`preview__display palette${palette}`}>
          <header className="preview__display--header">
            <div className="preview__display--container">
              <h3 className="preview__display--title">{name || "Nombre Apellido"}</h3>
              <h3 className="preview__display--subtitle">{job || "Front-end Developer"}</h3>
            </div>
          </header>
          <div className="preview__display--img" style={{ backgroundImage: `url(${photo || defaultImage})` }}></div>
          <footer className="preview__display--footer menu">
            <ul className="menu__list">
              <Icon href={`tel:+${phone}`} icon={faMobileAlt} classLi={`menu__items--phone ${phone ? "" : "filter"}`} />
              <Icon href={`mailto:${email}`} icon={faEnvelope} classLi={`menu__items--email ${email ? "" : "filter"}`} />
              <Icon href={`https://www.linkedin.com/in/${linkedin}`} icon={faLinkedinIn} classLi={`menu__items--linkedin ${linkedin ? "" : "filter"}`} />
              <Icon href={`https://www.github.com/${github}`} icon={faGithubAlt} classLi={`menu__items--github ${github ? "" : "filter"}`} />
            </ul>
          </footer>
        </article>
      </div>
    </section>
  );
};

Preview.propTypes = {
  resetHandler: PropTypes.func.isRequired,
  palette: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired
};

export default Preview;
