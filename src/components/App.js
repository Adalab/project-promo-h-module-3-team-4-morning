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
      imageUrl: ''
    };
    this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
    this.fileUploadHandler = this.fileUploadHandler.bind(this);

  }
  fileSelectedHandler(ev) {
    debugger;
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

  render() {
    return (
      <div className="App" >
        <Header />
        <main className="main">
          <Preview image={this.state.image} />
          <Form image={this.state.image} fileSelectedHandler={this.fileSelectedHandler} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
