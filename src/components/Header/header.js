import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  componentDidMount() {
    const h1Text = "Nick Murphy";
    const ellipses = "...";
    const h3Text = "is obsessed with web development.";

    const h1Target = document.querySelector(".banner-text--h1");
    const ellipsesTarget = document.querySelector(".banner-text--ellipses");
    const h3Target = document.querySelector(".banner-text--h3");

    const textAppear = function(
      text,
      domTarget,
      timeBetween = 150,
      initialDelay = 0
    ) {
      let arr = text.split("");
      for (let i = 0; i < arr.length; i++) {
        setTimeout(function() {
          let span = document.createElement("span");
          span.innerText += arr[i];
          span.classList.add("textAppear");
          domTarget.appendChild(span);
        }, initialDelay + i * timeBetween);
      }
    };

    textAppear(h1Text, h1Target);
    textAppear(ellipses, ellipsesTarget, 200, 2000);
    textAppear(h3Text, h3Target, 50, 3000);
  }

  render() {
    return (
      <div className="site-header">
        <header>
          <span id="home" />
          <div className="banner-text">
            <h1 className="banner-text--h1"> </h1>
            <h3 className="banner-text--ellipses"> </h3>
            <br />
            <h3 className="banner-text--h3"> </h3>
          </div>
          <div className="arrow--container">
            <i className="arrow--down" />
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
