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
      image: '',
      name: '',
      job: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
      palette: '1',
      create: 'filter',
      twitter: 'hidden'
    };
    this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
    this.fileUploadHandler = this.fileUploadHandler.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.resetHandler = this.resetHandler.bind(this);
    this.paletteInputHandler = this.paletteInputHandler.bind(this);
    this.handleTwitter = this.handleTwitter.bind(this);


  }
  resetHandler() {
    this.setState({
      image: '',
      name: '',
      job: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
      palette: '1',
      checked: '',
      twitter: 'hidden'
    });
    this.updateFilterCreate();
    this.handleTwitter();

  }

  fileSelectedHandler(ev) {
    let myFile = ev.target.files[0];
    this.fr.addEventListener('load', this.fileUploadHandler);
    this.fr.readAsDataURL(myFile);
  }
  fileUploadHandler() {
    const imageData = this.fr.result;
    this.setState({
      image: [imageData]
    });
    this.updateFilterCreate();
    this.handleTwitter();

  }
  updateFilterCreate() {
    this.setState((prevState, props) => {
      let nextStyling;
      if (!!prevState.name === true && !!prevState.job === true && !!prevState.email === true && !!prevState.linkedin === true && !!prevState.github === true && !!prevState.phone === true && prevState.image !== '') {
        nextStyling = '';

      } else {
        nextStyling = 'filter';
      }
      return {
        create: nextStyling
      };
    });
  }
  handleTwitter() {
    this.setState((prevState, props) => {
      let nextStyling;
      if (!!prevState.name === true && !!prevState.job === true && !!prevState.email === true && !!prevState.linkedin === true && !!prevState.github === true && !!prevState.phone === true && prevState.image !== '') {
        nextStyling = '';

      } else {
        nextStyling = 'hidden';
      }
      return {
        twitter: nextStyling
      };
    });
  }
  handleInputChange(ev) {
    const id = ev.target.id;
    const value = ev.target.value;
    this.setState({
      [id]: value,
    });
    this.updateFilterCreate();
    this.handleTwitter();

  }
  paletteInputHandler(ev) {
    const value = ev.target.value;
    this.setState({
      palette: value
    });
  }
  render() {
    return (
      <div className="App" >
        <Header />
        <main className="main">
          <Preview
            name={this.state.name}
            job={this.state.job}
            image={this.state.image}
            phone={this.state.phone}
            email={this.state.email}
            linkedin={this.state.linkedin}
            github={this.state.github}
            palette={this.state.palette}
            resetHandler={this.resetHandler}
          />
          <Form
            image={this.state.image}
            name={this.state.name}
            job={this.state.job}
            phone={this.state.phone}
            email={this.state.email}
            linkedin={this.state.linkedin}
            github={this.state.github}
            fileSelectedHandler={this.fileSelectedHandler}
            handleChange={this.handleInputChange}
            colorCreate={this.state.create}
            paletteInputHandler={this.paletteInputHandler}
            palette={this.state.palette}
            checked={this.state.checked}
            handleTwitter={this.handleTwitter}
            twitter={this.state.twitter}
          />

        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
