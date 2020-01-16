import React from "react";
import "../stylesheets/form.scss";
import Collapsible from "./Collapsible";
import Design from "./Design";
import Fill from "./Fill";
import Share from "./Share";
import PropTypes from "prop-types";
import { faKeyboard, faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { faObjectUngroup } from "@fortawesome/free-regular-svg-icons";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsibleId: "C1"
    };
    this.handleCollapsibleAction = this.handleCollapsibleAction.bind(this);
  }

  handleCollapsibleAction(ev) {
    let clickedId = ev.currentTarget.id;
    this.setState(prevState => {
      if (prevState.collapsibleId === clickedId) {
        return {
          collapsibleId: null
        };
      } else {
        return {
          collapsibleId: clickedId
        };
      }
    });
  }

  render() {
    const { inputChangeHandler, handleFetch } = this.props;
    const { palette, name, job, email, phone, linkedin, github, photo, url, isLoading, shareButton, errorMessage } = this.props.state;
    return (
      <section className="form">
        <form>
          <Collapsible title="Diseña" icon={faObjectUngroup} id="C1" collapsibleId={this.state.collapsibleId} handleCollapsibleAction={this.handleCollapsibleAction}>
            <Design inputChangeHandler={inputChangeHandler} palette={palette} />
          </Collapsible>
          <Collapsible title="Rellena" icon={faKeyboard} id="C2" collapsibleId={this.state.collapsibleId} handleCollapsibleAction={this.handleCollapsibleAction}>
            <Fill name={name} job={job} email={email} phone={phone} linkedin={linkedin} github={github} inputChangeHandler={inputChangeHandler} photo={photo} />
          </Collapsible>
          <Collapsible title="Comparte" icon={faShareAlt} id="C3" collapsibleId={this.state.collapsibleId} handleCollapsibleAction={this.handleCollapsibleAction}>
            <Share handleFetch={handleFetch} url={url} loading={isLoading} shareValue={shareButton} errorMessage={errorMessage} name={name} job={job} email={email} phone={phone} linkedin={linkedin} github={github} photo={photo} />
          </Collapsible>
        </form>
      </section>
    );
  }
}

Form.propTypes = {
  handleFetch: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
  inputChangeHandler: PropTypes.func.isRequired
};

export default Form;
