import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";
import "../styles/projects.css";

const NUM_REPOS = 10;

export default class Projects extends Component {
  constructor() {
    super();
    this.state = {
      repos: []
    };
  }

  componentDidMount() {
    fetch("/api/projects")
      .then(res => res.json())
      .then(projects => {
        const json = JSON.parse(projects);
        this.setState({ repos: json });
        console.log(json);
      });
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
    return topRepos.map((item, idx) => {
      return (
        <Card key={idx}>
          <Card.Header>
            <h4>
              <a href={item.html_url}>{item.name}</a>
            </h4>
          </Card.Header>
          <Card.Body>
            <Card.Subtitle className="mb-3">
              <i className="fas fa-star" /> {item.stargazers_count}
              <i className="fas fa-code-branch pl-2" /> {item.forks}
            </Card.Subtitle>
            <Card.Text>{item.description}</Card.Text>
          </Card.Body>
        </Card>
      );
    });
  }

  render() {
    return (
      <Container className="d-flex flex-wrap animated fadeIn slow overflow-auto">
        <div className="py-4 row align-items-end w-100">
          <h3 className="col">Here are a few of my repositories from GitHub</h3>
        </div>
        <div className="row align-items-start">
          <CardColumns className="col">{this.makeCards()}</CardColumns>
        </div>
      </Container>
    );
  }
}
