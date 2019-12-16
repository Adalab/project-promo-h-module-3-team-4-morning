import React from "react";
import "../stylesheets/mainStyle.scss";

class Collapsible extends React.Component {
  render() {
    return (
      <legend className="collapsible">
        <div className="collapsible__left">
          <i className="collapsible__left--fav far fa-object-ungroup"></i>
          <h2 className="collapsible__left--title">Diseña</h2>
        </div>
        <i className="collapsible--arrow fas fa-angle-down"></i>
      </legend>
    );
  }
}

export default Collapsible;
