import React, { Component } from "react";
import "../styles/links.css";

export default class Intro extends Component {
  state = {
    links: [
      {
        url: "https://github.com/SpencerMcMurray",
        icon: <i className="fab fa-github" />
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
      <ul className="mt-auto pl-0 links justify-content-center animated fadeIn slow">
        {this.state.links.map((item, idx) => (
          <a className="col" key={idx} href={item.url}>
            {item.icon}
          </a>
        ))}
      </ul>
    );
  }
}
