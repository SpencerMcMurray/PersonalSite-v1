import React, { Component } from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import Navigation from "./components/Navigation";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import Links from "./components/Links";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <ScrollableAnchor id={"intro"}>
          <Intro />
        </ScrollableAnchor>
        <ScrollableAnchor id={"about"}>
          <About />
        </ScrollableAnchor>
        <ScrollableAnchor id={"projects"}>
          <Projects />
        </ScrollableAnchor>
        <ScrollableAnchor id={"contacts"}>
          <Links />
        </ScrollableAnchor>
      </React.Fragment>
    );
  }
}
