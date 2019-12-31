import React from "react";
import "../stylesheets/form.scss";
import Collapsible from "./Collapsible";
import Design from "./Design";
import Fill from "./Fill";
import Share from "./Share";

class Form extends React.Component {

  render() {
    return (
      <section className="form">
        <form>
          <Collapsible title="Diseña" classIcon="far fa-object-ungroup">
            <Design />
          </Collapsible>
          <Collapsible title="Rellena" classIcon="far fa-keyboard">
            <Fill image={this.props.image} fileSelectedHandler={this.props.fileSelectedHandler} handleChange={this.props.handleChange} name={this.props.name} job={this.props.job} phone={this.props.phone} email={this.props.email} linkedin={this.props.linkedin} github={this.props.github} />
          </Collapsible>
          <Collapsible title="Comparte" classIcon="fas fa-share-alt">
            <Share colorCreate={this.props.colorCreate} />
          </Collapsible>
        </form>
      </section>
    );
  }
}

export default Form;
