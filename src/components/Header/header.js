import React from "react";
import "./header.css";
import Nav from "../Nav/nav";

const Header = props => (
  <header>
    <span id="home" />
    <Nav />
    <div className="banner-text">
      <h1>I'm Nick Murphy,</h1>
      <h3>and I'm obsessed with web development.</h3>
      <div className="arrow--container">
        <i className="arrow--down" />
      </div>
    </div>
  </header>
);

export default Header;
