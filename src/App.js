import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/header";
import AboutMe from "./components/AboutMe/aboutme";
import Projects from "./components/Projects/projects";
import Footer from "./components/Footer/footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Projects />
        <AboutMe />
        <Footer />
      </div>
    );
  }
}

export default App;
