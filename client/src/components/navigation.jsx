import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../styles/navigation.css";

export default class Navigation extends Component {
  state = {
    brand: "Spencer McMurray",
    pages: [
      { key: 1, name: "About", page: "/about" },
      { key: 2, name: "Projects", page: "/projects" }
    ]
  };
  handleChangePage = page => {
    console.log(page);
  };
  render() {
    const pages = this.state.pages.map(item => {
      return (
        <Nav.Link key={item.key} href={item.page}>
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
