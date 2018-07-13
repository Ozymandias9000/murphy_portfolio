import React from "react";
import "./header.css";

const Header = props => (
  <div className='site-header'>
    <header>
      <span id="home" />
      <div className="banner-text">
        <h1>Nick Murphy</h1>
        <h3>...</h3>
        <br />
        <h3>is obsessed with web development.</h3>
      </div>
      <div className="arrow--container">
        <i className="arrow--down" />
      </div>
    </header>
  </div>
);

export default Header;
