import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Intro from "./components/Intro";
import About from "./components/About";
import Links from "./components/Links";

class App extends Component {
  render() {
    return (
      <Router>
        <Navigation />

        <Route exact path="/" component={Intro} />
        <Route path="/about" component={About} />
        <Links />
      </Router>
    );
  }
}

export default App;
