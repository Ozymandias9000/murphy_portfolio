import React from "react";
import "./nav.css";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true
    };
  }

  toggleMenu = e => {
    this.setState(prevState => ({ active: !prevState.active }));
    e.currentTarget.classList.toggle("change");
  };

  render() {
    return (
      <nav
        className={
          this.state.active || window.innerWidth > 700
            ? "nav"
            : "nav nav--responsive"
        }
      >
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#resume">Resume</a>
        <div className="menuIcon" onClick={this.toggleMenu}>
          <div className="bar1" />
          <div className="bar2" />
          <div className="bar3" />
        </div>
      </nav>
    );
  }
}

export default Nav;
