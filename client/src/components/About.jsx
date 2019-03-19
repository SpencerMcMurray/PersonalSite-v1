import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import "../styles/about.css";

class About extends Component {
  state = {
    isMobile: window.innerWidth < window.innerHeight
  };
  render() {
    return (
      <Container>
        <div className="py-4">
          <p className="p1 animated fadeIn">Hey there, my name is</p>
          <p className="p2 animated fadeInLeft">
            <b>Spencer McMurray.</b>
          </p>
          <p className="p3 animated fadeInRight">
            <b>I love to make things work.</b>
          </p>
        </div>
        <div>
          <p className="p4 animated fadeIn">
            I'm a Computer Science student at the University of Toronto. I tend
            to get involved in projects involving either web development, deep
            learning or image processing
          </p>
        </div>
      </Container>
    );
  }
}

export default About;
