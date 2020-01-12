import React from "react";
import "../stylesheets/collapsibles.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';


class Collapsible extends React.Component {
  render() {
    return (
      <section id={this.props.id} className={this.props.collapsibleId === this.props.id ? 'open' : ''}>
        <legend className='collapsible' onClick={this.props.handleCollapsibleAction} id={this.props.id}>
          <div className="collapsible__left">
            <div className="collapsible__left--fav ">
              <FontAwesomeIcon icon={this.props.icon} />
            </div>
            <h2 className="collapsible__left--title">{this.props.title}</h2>
          </div>
          <FontAwesomeIcon className="collapsible--arrow" icon={faChevronUp} />
        </legend>
        <div className="collapsible--window">
          {this.props.children}
        </div>
      </section>
    );
  }
}

export default Collapsible;
