import React from "react";
import logo from "../images/logo.svg";
import "../stylesheets/App.scss";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
      {/* 

      <main class="main">
        <partial src="_preview.html"></partial>
        <section class="input">
          <partial src="_form.html"></partial>
        </section>
      </main>

      <partial src="_footer.html"></partial> */}
    </div>
  );
}

export default App;
