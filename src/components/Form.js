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
              paletteHandler={this.props.paletteHandler}
              palette={this.props.palette}
            />
          </Collapsible>
          <Collapsible title="Rellena" classIcon="far fa-keyboard">
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
          <Collapsible title="Comparte" classIcon="fas fa-share-alt">
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
      </section>
    );
  }
}

export default Form;
