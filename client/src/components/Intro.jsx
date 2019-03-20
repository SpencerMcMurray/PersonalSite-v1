import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import "../styles/intro.css";

export default class Intro extends Component {
  render() {
    return (
      <Container className="d-flex flex-wrap">
        <div className="py-4 row align-items-end w-100">
          <div className="col">
            <h5 className="p1 animated fadeIn col-12-md">
              Hey there, my name is
            </h5>
            <h2 className="p2 animated fadeInLeft col-12-md">
              <b>Spencer McMurray.</b>
            </h2>
            <h2 className="p3 animated fadeInRight col-12-md">
              <b>I love to make things work.</b>
            </h2>
          </div>
        </div>
        <div className="row align-items-start">
          <h5 className="col p4 animated fadeIn slow w-60">
            Explore my site to find more about what I do & who I am.
          </h5>
        </div>
      </Container>
    );
  }
}
