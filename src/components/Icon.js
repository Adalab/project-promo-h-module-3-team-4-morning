import React from "react";
import "../stylesheets/icons.scss";

class Icon extends React.Component {
  render() {
    return (
      <li className={`menu__items ${this.props.classLi} ${this.props.href}`}>
        <a className={`menu__links ${this.props.classA}`} href={this.props.href || ''} target="_blank">
          <i className={this.props.classI}></i>
        </a>
      </li>
    );
  }
}

export default Icon;


// meter props type y default, por ejemplo en el href. Definir que tipo de dato espera recibir el componente.