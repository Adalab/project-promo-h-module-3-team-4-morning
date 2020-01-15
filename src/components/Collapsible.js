import React from "react";
import "../stylesheets/collapsibles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

class Collapsible extends React.Component {
  render() {
    const {
      id,
      collapsibleId,
      handleCollapsibleAction,
      icon,
      title,
      children,
    } = this.props;
    return (
      <section id={id} className={collapsibleId === id ? "open" : ""}>
        <legend
          onClick={handleCollapsibleAction}
          className="collapsible"
          id={id}
        >
          <div className="collapsible__left">
            <div className="collapsible__left--fav ">
              <FontAwesomeIcon icon={icon} />
            </div>
            <h2 className="collapsible__left--title">{title}</h2>
          </div>
          <FontAwesomeIcon className="collapsible--arrow" icon={faChevronUp} />
        </legend>
        <div className="collapsible--window">{children}</div>
      </section>
    );
  }
}

export default Collapsible;
