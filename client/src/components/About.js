import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import "../styles/about.css";
import Me from "../images/me.jpg";

const BASE_DELAY = 200;
const DELAY_MULT = 150;

export default class Intro extends Component {
  state = {
    tech: [
      "Python",
      "JavaScript",
      "Flask",
      "TensorFlow",
      "OpenCV",
      "Firebase",
      "Node.js",
      "React"
    ]
  };
  render() {
    return (
      <Container
        className="d-flex h-auto flex-wrap overflow-auto"
        style={{ paddingTop: "29vh", paddingBottom: "10vh" }}
      >
        <ScrollAnimation
          animateIn="fadeIn slow"
          className="col py-4 row align-items-end w-100"
        >
          <h2>About me</h2>
        </ScrollAnimation>
        <div className="row flex-wrap">
          <div className="col col-6-md align-items-start w-50">
            <ScrollAnimation animateIn="fadeIn slow">
              <p>
                Hi again, I'm a Computer Science student at the University of
                Toronto and I love building things that make life easier. I tend
                to delve into projects involving web development, deep learning
                and/or image processing, but I'm also interested in app
                development and video game design!
              </p>
              <h4 className="pt-4 pb-2">
                Here are some of my favourite technologies
              </h4>
            </ScrollAnimation>
            <ul className="pl-0 w-75 pb-4">
              {this.state.tech.map((item, idx) => {
                const delay = BASE_DELAY + DELAY_MULT * idx;
                return (
                  <ScrollAnimation key={idx} delay={delay} animateIn="fadeIn">
                    <li className="tech">{item}</li>
                  </ScrollAnimation>
                );
              })}
            </ul>
          </div>
          <ScrollAnimation
            animateIn="fadeIn slow"
            className="col d-flex col-6-md justify-content-center"
          >
            <Image rounded src={Me} alt="Me" />
          </ScrollAnimation>
        </div>
      </Container>
    );
  }
}
