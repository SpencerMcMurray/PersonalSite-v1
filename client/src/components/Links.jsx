import React, { Component } from "react";
import "../styles/links.css";

const BASE_DELAY = 2000;
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
      <ul className="pl-0 links justify-content-center">
        {this.state.links.map((item, idx) => {
          const delay = BASE_DELAY + DELAY_MULT * idx;
          return (
            <a
              style={{ animationDelay: delay + "ms" }}
              className="px-2 animated fadeIn"
              key={idx}
              href={item.url}
            >
              {item.icon}
            </a>
          );
        })}
      </ul>
    );
  }
}
