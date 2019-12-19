import React from "react";
import "../stylesheets/mainStyle.scss";
import "../stylesheets/hidden.scss"

class Collapsible extends React.Component {
constructor (props) {
  super(props);
  this.state = {
    hidden: 'close'
  }
  this.handleClick = this.handleClick.bind(this);
}

handleClick() {
    this.setState((prevState, props) => {
      let nextStyling;
      if (prevState.hidden === 'close') {
        nextStyling = '';
      } else {
        nextStyling = 'close';
      }

      return {
        hidden: nextStyling
      };
    });
  }

 render() {
    return (
      <div className={this.state.hidden}>
        <legend className="collapsible" onClick={this.handleClick}>
          <div className="collapsible__left">
            <i className={this.props.classIcon}></i>
            <h2 className="collapsible__left--title">{this.props.title}</h2>
          </div>
          <i className="collapsible--arrow fas fa-angle-down"></i>
        </legend>
        <div className="collapsible__content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Collapsible;
