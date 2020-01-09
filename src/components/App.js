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
    const localStorageData = localStorage.get('user', {
      photo: "",
      name: "",
      job: "",
      email: "",
      phone: "",
      linkedin: "",
      github: "",
      palette: "1",
      shareButton: "filter",
      url: ''
    })
    this.fr = new FileReader();
    this.state = localStorageData;
    this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
    this.fileUploadHandler = this.fileUploadHandler.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.paletteHandler = this.paletteHandler.bind(this);
    this.resetHandler = this.resetHandler.bind(this);
    this.handleFetch = this.handleFetch.bind(this);
    this.changeColorBtn = this.changeColorBtn.bind(this);
    this.isFilledRight = this.isFilledRight.bind(this);
  }

  paletteHandler(ev) {
    const id = ev.target.id;
    this.setState({
      palette: id,
    });
  }

  resetHandler() {
    this.setState({
      photo: "",
      name: "",
      job: "",
      email: "",
      phone: "",
      linkedin: "",
      github: "",
      palette: "1",
      url: ''
    });
    this.changeColorBtn();
  }

  sendRequest(json) {

    fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
      method: 'POST',
      body: JSON.stringify(json),
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(function (resp) { return resp.json(); })
      //loader//
      .then(data => {
        this.setState({
          url: data.cardURL
        })
        return data.cardURL
      }
      )
      .catch(function (error) { console.log(error); });
  }

  handleFetch(ev) {
    ev.preventDefault();
    this.sendRequest(this.state);
  }

  fileSelectedHandler(ev) {
    let myFile = ev.target.files[0];
    this.fr.addEventListener("load", this.fileUploadHandler);
    this.fr.readAsDataURL(myFile);
  }

  fileUploadHandler() {
    const imageData = this.fr.result;
    this.setState({
      photo: imageData,
    });
    this.changeColorBtn();
  }

  handleInputChange(ev) {
    const id = ev.target.id;
    const value = ev.target.value;
    this.setState({
      [id]: value,
    });
    this.changeColorBtn();
  }

  isFilledRight() {
    this.setState((prevState, props) => {
      debugger
      if (!!prevState.name === true && !!prevState.job === true && !!prevState.email === true && !!prevState.phone === true && !!prevState.linkedin === true && !!prevState.github === true && !!prevState.photo === true) {
        return true
      } else {
        return false
      }
    });
  }

  changeColorBtn() {
    this.setState((prevState, props) => {
      let newStyle;
      if (!!prevState.name === true && !!prevState.job === true && !!prevState.email === true && !!prevState.phone === true && !!prevState.linkedin === true && !!prevState.github === true && !!prevState.photo === true) {
        newStyle = "";
      } else {
        newStyle = "filter";
      }
      return {
        shareButton: newStyle
      };
    });
  }

  componentDidUpdate() {
    localStorage.set('user', this.state);
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
                  <Preview
                    resetHandler={this.resetHandler}
                    palette={this.state.palette}
                    photo={this.state.photo}
                    name={this.state.name}
                    job={this.state.job}
                    email={this.state.email}
                    phone={this.state.phone}
                    linkedin={this.state.linkedin}
                    github={this.state.github}
                  />
                  <Form
                    paletteHandler={this.paletteHandler}
                    palette={this.state.palette}
                    handleInputChange={this.handleInputChange}
                    name={this.state.name}
                    job={this.state.job}
                    email={this.state.email}
                    phone={this.state.phone}
                    linkedin={this.state.linkedin}
                    github={this.state.github}
                    photo={this.state.photo}
                    fileSelectedHandler={this.fileSelectedHandler}
                    handleFetch={this.handleFetch}
                    url={this.state.url}
                    shareValue={this.state.shareButton}
                  />
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
