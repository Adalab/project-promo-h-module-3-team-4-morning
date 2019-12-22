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
          <Collapsible title="Diseña" classIcon="collapsible__left--fav far fa-object-ungroup">
            <Design />
          </Collapsible>
          <Collapsible title="Rellena" classIcon="collapsible__left--fav far fa-keyboard">
            <Fill />
          </Collapsible>
          <Collapsible title="Comparte" classIcon="collapsible__left--fav fas fa-share-alt">
            <Share />
          </Collapsible>
        </form>
      </section>
    );
  }
}

export default Form;
