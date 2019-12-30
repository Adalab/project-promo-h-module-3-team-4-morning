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
      href: 'filter'
    };
    this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
    this.fileUploadHandler = this.fileUploadHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
  }

  handleChange(ev) {
    const id = ev.target.id;
    const value = ev.target.value;
    console.log(ev.target);
    this.setState({
      [id]: value,
    });
    this.setState((prevState, props) => {
      let nextStyling;
      if (this.state.href) {
        nextStyling = '';
      } else {
        nextStyling = 'filter';
      }
      return {
        href: nextStyling
      };
    });
  }

  render() {
    return (
      <div className="App" >
        <Header />
        <main className="main">
          <Preview image={this.state.image} name={this.state.name} job={this.state.job} phone={this.state.phone} email={this.state.email} linkedin={this.state.linkedin} github={this.state.github} href={this.state.href} />
          <Form image={this.state.image} fileSelectedHandler={this.fileSelectedHandler} handleChange={this.handleChange} name={this.state.name} job={this.state.job} phone={this.state.phone} email={this.state.email} linkedin={this.state.linkedin} github={this.state.github} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
