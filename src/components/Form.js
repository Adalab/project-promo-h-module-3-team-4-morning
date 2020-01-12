import React from "react";
import "../stylesheets/form.scss";
import Collapsible from "./Collapsible";
import Design from "./Design";
import Fill from "./Fill";
import Share from "./Share";
import { faKeyboard } from '@fortawesome/free-solid-svg-icons';
import { faObjectUngroup } from '@fortawesome/free-regular-svg-icons';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsibleId: "C1",
    };
    this.handleCollapsibleAction = this.handleCollapsibleAction.bind(this);
  }

  handleCollapsibleAction(ev) {
    debugger
    console.log(ev.target);
    let clickedId = ev.target.id;
    console.log(clickedId)
    this.setState((prevState, props) => {
      if (prevState.collapsibleId === clickedId) {
        return {
          collapsibleId: null,
        };
      } else {
        return {
          collapsibleId: clickedId,
        };
      }
    });
  }
  render() {
    return (
      <section className="form">
        <form  >
          <Collapsible title="Diseña" icon={faObjectUngroup} id='C1' collapsibleId={this.state.collapsibleId} handleCollapsibleAction={this.handleCollapsibleAction} >
            <Design
              paletteHandler={this.props.paletteHandler}
              palette={this.props.palette}
            />
          </Collapsible>
          <Collapsible title="Rellena" icon={faKeyboard} id='C2' collapsibleId={this.state.collapsibleId} handleCollapsibleAction={this.handleCollapsibleAction}>
            <Fill
              name={this.props.name}
              job={this.props.job}
              email={this.props.email}
              phone={this.props.phone}
              linkedin={this.props.linkedin}
              github={this.props.github}
              handleInputChange={this.props.handleInputChange}
              photo={this.props.photo}
              fileSelectedHandler={this.props.fileSelectedHandler}
            />
          </Collapsible>
          <Collapsible title="Comparte" icon={faShareAlt} id='C3' collapsibleId={this.state.collapsibleId} handleCollapsibleAction={this.handleCollapsibleAction}>
            <Share
              fetchFunction={this.props.fetchFunction}
              handleFetch={this.props.handleFetch}
              url={this.props.url}
              loading={this.props.loading}
              shareValue={this.props.shareValue}
              shareURL={this.props.shareURL}
            />
          </Collapsible>
        </form>
      </section >
    );
  }
}

export default Form;
