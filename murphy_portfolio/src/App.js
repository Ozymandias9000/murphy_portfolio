import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/header';
import AboutMe from './components/AboutMe/aboutme';
import Projects from './components/Projects/projects';

class App extends Component {
  render() {
  	
    return (
      <div>
        <Header />
        <AboutMe />
        <Projects />
      </div>
    );
  }
}

export default App;
