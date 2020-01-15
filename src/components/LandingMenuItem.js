import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

class MenuItem extends React.Component {
  render() {
    return (
      <li className="menu__item">
        <FontAwesomeIcon className="menu__item--fav" icon={this.props.icon} />
        <h3 className="menu__item--text">{this.props.text}</h3>
      </li>
    );
  }
}

MenuItem.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.object
};
export default MenuItem;
