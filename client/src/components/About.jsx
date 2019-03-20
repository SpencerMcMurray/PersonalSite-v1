import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import "../styles/about.css";
import Me from "../images/me.jpg";

export default class Intro extends Component {
  render() {
    return (
      <Container className="d-flex flex-wrap animated fadeIn slow">
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
              <li>Python</li>
              <li>JavaScript</li>
              <li>Flask</li>
              <li>TensorFlow</li>
              <li>OpenCV</li>
              <li>MySQL</li>
              <li>Node.js</li>
              <li>React</li>
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
