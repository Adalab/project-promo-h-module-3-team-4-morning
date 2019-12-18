import React from "react";
import logo from "../images/logo.svg";
import "../stylesheets/App.scss";
import "../stylesheets/mainStyle.scss";
import Header from "./Header";
import Footer from "./Footer";
import Preview from "./Preview";
import Form from "./Form";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Preview />
        <Form />
      </main>
      <Footer />
    </div>
  );
}

export default App;
