import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/header';
import AboutMe from './components/AboutMe/aboutme';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <AboutMe />
      </div>
    );
  }
}

export default App;
