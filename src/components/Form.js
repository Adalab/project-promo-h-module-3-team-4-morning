import React from "react";
import "../stylesheets/mainStyle.scss";
import Collapsible from "./Collapsible";
import Design from "./Design";
import Fill from "./Fill";
import Share from "./Share";

class Form extends React.Component {
  render() {
    return (
      <form>
        <Collapsible />
        <Design />
        <Collapsible />
        <Fill />
        <Collapsible />
        <Share />
      </form>
    );
  }
}

export default Form;
