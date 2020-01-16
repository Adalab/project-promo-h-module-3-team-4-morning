import React from "react";
import "../stylesheets/collapsibles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const Collapsible = props => {
  const { collapsibleId, id, handleCollapsibleAction, icon, title, children } = props;

  return (
    <section id={id} className={collapsibleId === id ? "open" : ""}>
      <legend onClick={handleCollapsibleAction} className="collapsible" id={id}>
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
};

Collapsible.propTypes = {
  id: PropTypes.string.isRequired,
  collapsibleId: PropTypes.string.isRequired,
  handleCollapsibleAction: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired
};

export default Collapsible;
