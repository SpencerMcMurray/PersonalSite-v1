import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class Navigation extends Component {
  state = {
    brand: "Spencer McMurray",
    pages: [
      { name: "About", url: "#about" },
      { name: "Projects", url: "#projects" }
    ]
  };
  render() {
    const pages = this.state.pages.map(item => {
      return <Nav.Link href={item.url}>{item.name}</Nav.Link>;
    });
    return (
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Navbar.Brand>{this.state.brand}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">{pages}</Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
