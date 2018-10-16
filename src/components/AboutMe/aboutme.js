import React from "react";
import "./aboutme.css";
import Tilt from "react-tilt";

const AboutMe = () => (
  <div className="about-me">
    <span id="about" />
    <div className="about-me__text">
      <h2>About Me</h2>

      <Tilt
        className="Tilt"
        options={{ max: 25 }}
        style={{ height: 250, width: 250 }}
      >
        <img src="./images/murphy_photo.jpg" alt="Nick Murphy" />
      </Tilt>
      <p>I'm a Full Stack Developer living in Phoenix, AZ. Learning is life.</p>
      <span id="contact" />
      <h2>Contact Details</h2>
      <p>
        <a
          href="mailto:nick_murphy@sbcglobal.net"
          target="_blank"
          rel="noreferrer noopener"
        >
          nick_murphy@sbcglobal.net
        </a>
      </p>
    </div>
  </div>
);

export default AboutMe;
