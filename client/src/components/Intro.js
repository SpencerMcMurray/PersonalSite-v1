import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Container from "react-bootstrap/Container";
import "../styles/intro.css";

export default class Intro extends Component {
  render() {
    return (
      <Container
        className="d-flex h-auto flex-wrap"
        style={{ paddingTop: "20vh", paddingBottom: "30vh" }}
      >
        <div className="py-4 row align-items-end w-100">
          <div className="col">
            <ScrollAnimation
              delay={200}
              animateIn="fadeIn"
              className="col-12-md"
            >
              <h5 color="lightsteelblue">Hey there, my name is</h5>
            </ScrollAnimation>
            <ScrollAnimation
              delay={400}
              animateIn="fadeInLeft"
              className="col-12-md"
            >
              <h2>
                <b>Spencer McMurray.</b>
              </h2>
            </ScrollAnimation>
            <ScrollAnimation
              delay={800}
              animateIn="fadeInRight"
              className="col-12-md"
            >
              <h2>
                <b>I love to make things work.</b>
              </h2>
            </ScrollAnimation>
          </div>
        </div>
        <div className="row align-items-start">
          <ScrollAnimation
            delay={1750}
            animateIn="fadeIn slow"
            className="w-60 col"
          >
            <h5 color="lightsteelblue">
              Explore my site to find more about what I do & who I am.
            </h5>
          </ScrollAnimation>
        </div>
      </Container>
    );
  }
}
