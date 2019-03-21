import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "../styles/links.css";
import Container from "react-bootstrap/Container";

const BASE_DELAY = 200;
const DELAY_MULT = 200;

export default class Intro extends Component {
  state = {
    links: [
      {
        url: "https://github.com/SpencerMcMurray",
        icon: <i className="fab fa-github" />
      },
      {
        url: "mailto:spencermcmurray@hotmail.com",
        icon: <i className="fas fa-envelope" />
      },
      {
        url: "https://www.linkedin.com/in/spencer-mcmurray-859048174/",
        icon: <i className="fab fa-linkedin" />
      },
      {
        url: "https://www.instagram.com/spencermcmurray/",
        icon: <i className="fab fa-instagram" />
      },
      {
        url: "https://twitter.com/spencemcmurray",
        icon: <i className="fab fa-twitter" />
      }
    ]
  };
  render() {
    return (
      <Container className="h-auto mx-auto row links justify-content-center">
        {this.state.links.map((item, idx) => {
          const delay = BASE_DELAY + DELAY_MULT * idx;
          return (
            <a className="px-2 col-2-md" key={idx} href={item.url}>
              <ScrollAnimation offset={0} delay={delay} animateIn="fadeInRight">
                {item.icon}
              </ScrollAnimation>
            </a>
          );
        })}
      </Container>
    );
  }
}
