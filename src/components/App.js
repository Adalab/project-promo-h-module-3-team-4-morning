import React from "react";
import "../stylesheets/app.scss";
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
