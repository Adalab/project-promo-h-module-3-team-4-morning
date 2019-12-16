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
        <section className="input">
          <Form />
        </section>
      </main>

      <Footer />
      {/* 

      <main class="main">
        
        <section class="input">
          <partial src="_form.html"></partial>
        </section>
      </main>

       */}
    </div>
  );
}

export default App;
