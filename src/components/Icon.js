import React from "react";
import "../stylesheets/mainStyle.scss";

class Icon extends React.Component {
  render() {
    return (
      <li className={`menu__items ${this.props.classLi}`}>
        <a className={`menu__links ${this.props.classA}`} href="" target="_blank">
          <i className={this.props.classI}></i>
        </a>
      </li>
    );
  }
}

export default Icon;
