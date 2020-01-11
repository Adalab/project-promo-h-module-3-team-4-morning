import React from "react";
import "../stylesheets/icons.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Icon extends React.Component {
  render() {
    return (
      <li className={`menu__items ${this.props.classLi}`}>
        <a className={`menu__links ${this.props.classA}`} href={this.props.href} target="_blank">
          <FontAwesomeIcon className={this.props.classI} icon={this.props.icon} />
        </a>
      </li>
    );
  }
}

export default Icon;

// meter props type y default, por ejemplo en el href. Definir que tipo de dato espera recibir el componente.
