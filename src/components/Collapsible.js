import React from "react";
import "../stylesheets/collapsibles.scss";

class Collapsible extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      closed: true,
    };
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    console.log("abrir y cerrar", this.state);
    // this.setState({ closed: ev.target.prevState });
  }

  render() {
    return (
      <div>
        <legend className="collapsible" onClick={this.handleClose}>
          <div className="collapsible__left">
            <i className={`collapsible__left--fav ${this.props.classIcon}`}></i>
            <h2 className="collapsible__left--title">{this.props.title}</h2>
          </div>
          <i className="collapsible--arrow fas fa-angle-down "></i>
        </legend>
        <div className="collapsibleWindow closed">{this.props.children}</div>
      </div>
    );
  }
}

export default Collapsible;
