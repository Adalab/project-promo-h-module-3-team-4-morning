import React from "react";
import "../stylesheets/icons.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const Icon = props => {
  const { classLi, classA, href, icon, classI } = props;
  return (
    <li className={`menu__items ${classLi}`}>
      <a className={`menu__links ${classA}`} href={href} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className={classI} icon={icon} />
      </a>
    </li>
  );
};

Icon.propTypes = {
  classLi: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired
};

export default Icon;
