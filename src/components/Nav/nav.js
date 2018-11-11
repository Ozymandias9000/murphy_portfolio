import React from "react";
import { Link } from "react-router-dom";
import { Spring } from "react-spring";
import "./nav.css";

class Nav extends React.Component {
  state = {
    active: true
  };

  toggleMenu = e => {
    this.setState(prevState => ({ active: !prevState.active }));
    e.currentTarget.classList.toggle("change");
  };

  render() {
    // TODO: Refactor into component
    return (
      // This trickery enables the slide animation on large screens
      (window.innerWidth >= 700 && (
        <Spring
          from={{
            height: `0px`
          }}
          to={{
            height: `65px`
          }}
          config={{ tension: 100, friction: 80 }}
        >
          {({ height }) => (
            <nav className="nav" style={{ height }}>
              <button onClick={() => window.scrollTo(0, 0)} className="home">
                <p>Home</p>
              </button>
              <a href="#projects">
                <p>Projects</p>
              </a>
              <a href="#about">
                <p>About</p>
              </a>
              <Link to="/resume">
                <p>Resume</p>
              </Link>
              <div className="menuIcon" onClick={this.toggleMenu}>
                <div className="bar1" />
                <div className="bar2" />
                <div className="bar3" />
              </div>
            </nav>
          )}
        </Spring>
      )) || // This trickery removes the animation on mobile
      (window.innerWidth < 700 && (
        <nav
          className={
            this.state.active || window.innerWidth > 700
              ? "nav"
              : "nav nav--responsive"
          }
        >
          <button onClick={() => window.scrollTo(0, 0)} className="home">
            <p>Home</p>
          </button>
          <a href="#projects">
            <p>Projects</p>
          </a>
          <a href="#about">
            <p>About</p>
          </a>
          <Link to="/resume">
            <p>Resume</p>
          </Link>
          <div className="menuIcon" onClick={this.toggleMenu}>
            <div className="bar1" />
            <div className="bar2" />
            <div className="bar3" />
          </div>
        </nav>
      ))
    );
  }
}

export default Nav;
