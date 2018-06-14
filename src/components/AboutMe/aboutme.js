import React from "react";
import "./aboutme.css";

const AboutMe = props => (
  <div className="about-me">
    <div className="about-me--container">
      <span id="about" />
      <div className="about-me__text">
        <h2>About Me</h2>
        <p>
          I'm a developer working in Phoenix. When I'm not coding, I love
          hiking, playing guitar, and cooking!
        </p>
        <span id="contact" />
        <img src="./images/IMG_20160109_094504828.jpg" alt="Nick Murphy" />
        <h2>Contact Details</h2>
        <p>
          Nick Murphy <br />
          Phoenix, AZ <br />
          nick_murphy@sbcglobal.net <br />
        </p>
        {/* <a href="">
          <button className="about-me__button">Download Resume</button>
        </a> */}
      </div>
    </div>
  </div>
);

export default AboutMe;
