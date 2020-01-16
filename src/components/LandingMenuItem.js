import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const MenuItem = props => {
  const { icon, text } = props;
  return (
    <li className="menu__item">
      <FontAwesomeIcon className="menu__item--fav" icon={icon} />
      <h3 className="menu__item--text">{text}</h3>
    </li>
  );
};

MenuItem.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired
};
export default MenuItem;
