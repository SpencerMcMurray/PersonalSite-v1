import React, { Component } from "react";
import Navigation from "./components/Navigation";
import About from "./components/About";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <About />
      </React.Fragment>
    );
  }
}

export default App;
