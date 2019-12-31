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
      create: 'filter'
    };
    this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
    this.fileUploadHandler = this.fileUploadHandler.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.resetHandler = this.resetHandler.bind(this);
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
    });
    this.updateFilterCreate();
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
  handleInputChange(ev) {
    const id = ev.target.id;
    const value = ev.target.value;
    console.log(ev.target);
    this.setState({
      [id]: value,
    });
    this.updateFilterCreate();
  }

  render() {
    return (
      <div className="App" >
        <Header />
        <main className="main">
          <Preview image={this.state.image} name={this.state.name} job={this.state.job} phone={this.state.phone} email={this.state.email} linkedin={this.state.linkedin} github={this.state.github} resetHandler={this.resetHandler} />
          <Form image={this.state.image} fileSelectedHandler={this.fileSelectedHandler} handleChange={this.handleInputChange} name={this.state.name} job={this.state.job} phone={this.state.phone} email={this.state.email} linkedin={this.state.linkedin} github={this.state.github} colorCreate={this.state.create} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
