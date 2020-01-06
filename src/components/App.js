import React from "react";
import "../stylesheets/app.scss";
import Header from "./Header";
import Footer from "./Footer";
import Preview from "./Preview";
import Form from "./Form";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.fr = new FileReader();
    this.state = {
      image: "",
      name: "",
      job: "",
      email: "",
      phone: " ",
      linkedin: "",
      github: "",
      shareButton: "filter"
    };
    this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
    this.fileUploadHandler = this.fileUploadHandler.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  fileSelectedHandler(ev) {
    let myFile = ev.target.files[0];
    this.fr.addEventListener("load", this.fileUploadHandler);
    this.fr.readAsDataURL(myFile);
  }
  fileUploadHandler() {
    const imageData = this.fr.result;
    this.setState({
      image: [imageData]
    });
  }

  handleInputChange(ev) {
    const id = ev.target.id;
    const value = ev.target.value;

    this.setState({
      [id]: value
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main className="main">
          <Preview image={this.state.image} name={this.state.name} job={this.state.job} email={this.state.email} phone={this.state.phone} linkedin={this.state.linkedin} github={this.state.github} />
          <Form handleInputChange={this.handleInputChange} name={this.state.name} job={this.state.job} email={this.state.email} phone={this.state.phone} linkedin={this.state.linkedin} github={this.state.github} image={this.state.image} fileSelectedHandler={this.fileSelectedHandler} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
