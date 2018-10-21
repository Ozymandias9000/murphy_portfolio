import React, { Component } from "react";
import "./header.css";
import { Spring } from "react-spring";

class Header extends Component {
  state = {
    h1Text: "Nick Murphy",
    ellipses: "...",
    h3Text: "is obsessed with web development."
  };
  componentDidMount() {
    // Animating text
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

    textAppear(this.state.h1Text, h1Target, 80, 1000);
    textAppear(this.state.ellipses, ellipsesTarget, 100, 3000);
    textAppear(this.state.h3Text, h3Target, 50, 4000);
  }

  render() {
    return (
      <>
        <Spring
          from={{
            height: `0%`
          }}
          to={{
            height: `100%`
          }}
          config={{ tension: 150, friction: 50 }}
        >
          {({ height }) => (
            <header className="site-header" style={{ height }}>
              <span id="home" />
              <div className="banner-text">
                <h1 className="banner-text--h1"> </h1>
                <h3 className="banner-text--ellipses"> </h3>
                <br />
                <h3 className="banner-text--h3"> </h3>
              </div>
              <div className={"arrow--container arrow--container__hidden"}>
                <i className="arrow--down" />
              </div>
            </header>
          )}
        </Spring>
        <div className="header--pad-box" />
      </>
    );
  }
  //      )
  // }
}

export default Header;
