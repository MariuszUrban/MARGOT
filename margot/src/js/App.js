import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Header from "./components/Header/index";
import Footer from "./components/Footer/indexContainer";
import Main from '../js/components/Main/index';
import About from '../js/components/About/index';
import Contact from '../js/components/Contact/index';
import "../sass/_app.scss";

function App() {
  return (
    <HashRouter>
    <div className="App">
      <section id='header'>
        <Header />
      </section>
      <section id='containers'>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route class path="/about" component={About} />
              <Route class path="/contact" component={Contact} />
            </Switch>
      </section>
      <section id='footer'>
          <Footer />
        </section>
    </div>
    </HashRouter>

  );
}

export default App;
