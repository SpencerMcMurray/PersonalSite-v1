import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import "../styles/about.css";
import Me from "../images/me.jpg";

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
      <Container className="d-flex flex-wrap animated fadeIn slow overflow-auto">
        <div className="col py-4 row align-items-end w-100">
          <h2>About me</h2>
        </div>
        <div className="row flex-wrap">
          <div className="col col-6-md align-items-start w-50">
            <h5>
              Hi again, I'm a Computer Science student at the University of
              Toronto and I love building things that make life easier. I tend
              to delve into projects involving web development, deep learning
              and/or image processing, but I'm also interested in app
              development and video game design!
            </h5>
            <h4 className="pt-4 pb-2">
              Here are some of my favourite technologies
            </h4>
            <ul className="pl-0 w-75 pb-4">
              {this.state.tech.map((item, idx) => (
                <li className="tech" key={idx}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="col d-flex col-6-md justify-content-center">
            <Image rounded src={Me} alt="Me" />
          </div>
        </div>
      </Container>
    );
  }
}
