import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import logo from '../images/logo.svg';
import '../styles/Main.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Express Website</h1>
          <Button variant="primary">Primary</Button>
        </header>
      </div>
    );
  }
}

export default App;
