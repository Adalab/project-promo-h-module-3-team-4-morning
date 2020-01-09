import React from "react";
import { Route, Switch } from "react-router-dom";
import "../stylesheets/app.scss";
import Header from "./Header";
import Footer from "./Footer";
import Preview from "./Preview";
import Form from "./Form";
import Landing from "./Landing";
import localStorage from "../localStorage/";

class App extends React.Component {
  constructor(props) {
    super(props);
    const localStorageData = localStorage.get("user", {
      image: "",
      name: "",
      job: "",
      email: "",
      phone: "",
      linkedin: "",
      github: "",
      palette: "1",
      shareButton: "filter"
    });
    this.fr = new FileReader();
    this.state = localStorageData;
    this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
    this.fileUploadHandler = this.fileUploadHandler.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.paletteHandler = this.paletteHandler.bind(this);
    this.resetHandler = this.resetHandler.bind(this);
  }

  paletteHandler(ev) {
    const id = ev.target.id;
    this.setState({
      palette: id
    });
  }

  resetHandler() {
    this.setState({
      image: "",
      name: "",
      job: "",
      email: "",
      phone: "",
      linkedin: "",
      github: "",
      palette: "1"
    });
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

  componentDidUpdate() {
    localStorage.set("user", this.state);
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route
            path="/create-card"
            render={() => (
              <>
                <Header />
                <main className="main">
                  <Preview resetHandler={this.resetHandler} palette={this.state.palette} image={this.state.image} name={this.state.name} job={this.state.job} email={this.state.email} phone={this.state.phone} linkedin={this.state.linkedin} github={this.state.github} />
                  <Form paletteHandler={this.paletteHandler} palette={this.state.palette} handleInputChange={this.handleInputChange} name={this.state.name} job={this.state.job} email={this.state.email} phone={this.state.phone} linkedin={this.state.linkedin} github={this.state.github} image={this.state.image} fileSelectedHandler={this.fileSelectedHandler} />
                </main>
              </>
            )}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
