import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Intro from "./components/Intro";

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Navigation />

        <Route exact path="/" component={Intro} />
      </Router>
    );
  }
}

export default App;
