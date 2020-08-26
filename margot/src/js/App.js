import React from "react";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";

import "../sass/_app.scss";

function App() {
  return (
    <div className="App">
      <section id='header'>
        <Header />
      </section>
      <section id='containers'>
        
      </section>
      <section id='footer'>
          <Footer />
        </section>
    </div>
  );
}

export default App;
