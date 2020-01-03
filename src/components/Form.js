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
            <Design
              paletteInputHandler={this.props.paletteInputHandler}
              value={this.props.palette}
              checked={this.props.checked}
            />
          </Collapsible>
          <Collapsible title="Rellena" classIcon="far fa-keyboard">
            <Fill
              name={this.props.name}
              job={this.props.job}
              image={this.props.image}
              phone={this.props.phone}
              email={this.props.email}
              linkedin={this.props.linkedin}
              github={this.props.github}
              fileSelectedHandler={this.props.fileSelectedHandler}
              handleChange={this.props.handleChange}
            />
          </Collapsible>
          <Collapsible title="Comparte" classIcon="fas fa-share-alt">
            <Share
              colorCreate={this.props.colorCreate}
              handleTwitter={this.props.handleTwitter}
              twitter={this.props.twitter}
            />
          </Collapsible>
        </form>
      </section>
    );
  }
}

export default Form;
