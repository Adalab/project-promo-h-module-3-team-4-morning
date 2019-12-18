import React from "react";
import "../stylesheets/mainStyle.scss";

class Icon extends React.Component {
  render() {
    return (
      <li className={this.props.classLi}>
        <a className={this.props.classA} href="" target="_blank">
          <i className={this.props.classI}></i>
        </a>
      </li>
    );
  }
}

export default Icon;
