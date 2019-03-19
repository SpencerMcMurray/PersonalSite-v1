import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../styles/navigation.css";

class Navigation extends Component {
  state = {
    brand: "Spencer McMurray",
    pages: [
      { key: 1, name: "About", url: "#about" },
      { key: 2, name: "Projects", url: "#projects" },
      { key: 3, name: "Links", url: "#links" }
    ]
  };
  render() {
    const pages = this.state.pages.map(item => {
      return (
        <Nav.Link key={item.key} href={item.url}>
          {item.name}
        </Nav.Link>
      );
    });
    return (
      <div id="header">
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

export default Navigation;
