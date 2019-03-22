import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Container from "react-bootstrap/Container";
import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";
import "../styles/projects.css";

const NUM_REPOS = 9;
const BASE_DELAY = 0;
const DELAY_MULT = 200;

const endpoint = "https://api.github.com/users/spencermcmurray/repos";

export default class Projects extends Component {
  constructor() {
    super();
    this.state = {
      repos: [],
      error: ""
    };
  }

  componentDidMount() {
    fetch(endpoint)
      .then(res => res.json())
      .then(projects => this.setState({ repos: projects }))
      .catch(e => this.setState({ error: e.message }));
  }

  makeCards() {
    // Sort the repos by total stars and forks in descending order
    const sortedRepos = this.state.repos.sort(
      (a, b) => b.stargazers_count + b.forks - a.stargazers_count - a.forks
    );
    let topRepos = [];
    let limit = NUM_REPOS > sortedRepos.length ? sortedRepos.length : NUM_REPOS;
    for (let i = 0; i < limit; i++) {
      topRepos.push(sortedRepos[i]);
    }
    return topRepos.map((item, idx) => this.generateCard(item, idx));
  }

  generateCard(data, idx) {
    const delay = BASE_DELAY + DELAY_MULT * idx;
    return (
      <ScrollAnimation
        offset={0}
        key={idx}
        delay={delay}
        animateIn="fadeIn"
        className="col-4-lg"
      >
        <Card>
          <Card.Header>
            <h4>
              <a href={data.html_url}>{data.name}</a>
            </h4>
          </Card.Header>
          <Card.Body>
            <Card.Subtitle className="mb-3 row">
              <div className="pl-3 col-1-sm">
                <i className="fas fa-star" /> {data.stargazers_count}
              </div>
              <div className="col-1-sm">
                <i className="fas fa-code-branch pl-2" /> {data.forks}
              </div>
              <div className="text-right col">{data.language}</div>
            </Card.Subtitle>
            <Card.Text>{data.description}</Card.Text>
          </Card.Body>
        </Card>
      </ScrollAnimation>
    );
  }

  render() {
    return (
      <Container
        className="d-flex h-auto flex-wrap overflow-auto"
        style={{ paddingTop: "30vh", paddingBottom: "25vh" }}
      >
        <div className="py-4 row align-items-end w-100">
          <ScrollAnimation animateIn="fadeIn slow" className="col">
            <h3>Here are a few repositories from my GitHub</h3>
          </ScrollAnimation>
        </div>
        <div className="row align-items-start">
          <CardColumns className="col">{this.makeCards()}</CardColumns>
          {this.state.error}
        </div>
        <ScrollAnimation
          delay={1000}
          animateIn="fadeIn slow"
          className="mx-auto my-4"
        >
          <a
            className="btn btn-primary"
            style={{ background: "rgb(0, 88, 170)" }}
            href="https://github.com/SpencerMcMurray"
          >
            (git) Checkout more!
          </a>
        </ScrollAnimation>
      </Container>
    );
  }
}
