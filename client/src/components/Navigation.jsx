import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../styles/navigation.css";

export default class Navigation extends Component {
  state = {
    brand: "Spencer McMurray",
    pages: [
      { name: "Intro", page: "#intro" },
      { name: "About", page: "#about" },
      { name: "Projects", page: "#projects" }
    ]
  };
  render() {
    const pages = this.state.pages.map((item, idx) => {
      return (
        <Nav.Link key={idx} href={item.page}>
          {item.name}
        </Nav.Link>
      );
    });
    return (
      <div id="header" style={{ marginBottom: "50px" }}>
        <Navbar variant="dark" expand="lg" fixed="top">
          <Navbar.Brand href="/">{this.state.brand}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">{pages}</Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
