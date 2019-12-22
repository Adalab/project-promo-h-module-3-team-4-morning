import React from "react";
import "../stylesheets/mainStyle.scss";

class Collapsible extends React.Component {
  render() {
    return (
      <div>
        <legend className="collapsible">
          <div className="collapsible__left">
            <i className={`collapsible__left--fav ${this.props.classIcon}`}></i>
            <h2 className="collapsible__left--title">{this.props.title}</h2>
          </div>
          <i className="collapsible--arrow fas fa-angle-down"></i>
        </legend>
        {this.props.children}
      </div>
    );
  }
}

export default Collapsible;
