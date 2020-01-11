import React from "react";
import "../stylesheets/collapsibles.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';


class Collapsible extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsible: "closed",
    };
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState((prevState, props) => {
      let nextStyling;
      if (prevState.collapsible === "closed") {
        nextStyling = "open";
      } else {
        nextStyling = "closed";
      }
      return {
        collapsible: nextStyling,
        design: nextStyling,
        fill: nextStyling,
        share: nextStyling,
      };
    });
  }

  render() {
    return (
      <div className={this.state.collapsible}>
        <legend className="collapsible" onClick={this.handleClose}>
          <div className="collapsible__left">
            <div className="collapsible__left--fav ">
              <FontAwesomeIcon icon={this.props.icon} />
            </div>
            <h2 className="collapsible__left--title">{this.props.title}</h2>
          </div>
          <FontAwesomeIcon className="collapsible--arrow" icon={faChevronUp} />
        </legend>
        <div className="collapsible--window">{this.props.children}</div>
      </div>
    );
  }
}

export default Collapsible;
