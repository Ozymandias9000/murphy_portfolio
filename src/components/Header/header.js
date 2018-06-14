import React from "react";
import "./header.css";
import Nav from "../Nav/nav";

const Header = props => (
  <header>
    <span id="home" />
    <Nav />
    <div className="banner-text">
      <h1>Nick Murphy</h1>
      <h3>...</h3>
      <br />
      <h3>is obsessed with web development.</h3>
    </div>
    {/* <div className="wrapper--arrow"> */}
    <div className="arrow--container">
      <i className="arrow--down" />
    </div>
    {/* </div> */}
  </header>
);

export default Header;
