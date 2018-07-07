import React, { Component } from "react";
import "./projects.css";

class Projects extends Component {
  render() {
    return (
      <div className="projects-container">
        <img
          src="./images/Nick_Yvonne.JPG"
          alt="Nick & Yvonne Murphy in Iceland"
        />

        <span id="projects" />
        <h1>Projects</h1>
        <section className="panels-container">
          <div className="panel panel1">
            <div className="overlay">
              <p>
                <a
                  href="https://github.com/Ozymandias9000/drinkful"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              </p>
              <p>Drinkful
                <h6>React PWA, Web Scraping, Stylus </h6>
              </p>
              <p>
                <a
                  href="https://drinkful-murphy.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View App
                </a>
              </p>
            </div>
          </div>

          <div className="panel panel2">
            <div className="overlay">
              <p>
                <a
                  href="https://github.com/Ozymandias9000/todolocalstorage/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              </p>
              <p>
                To Do List
                <h6>LocalStorage, JS, CSS, HTML</h6>
              </p>
              <p>
                <a
                  href="https://ozymandias9000.github.io/todolocalstorage/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View App
                </a>
              </p>
            </div>
          </div>

          <div className="panel panel3">
            <div className="overlay">
              <p>
                <a
                  href="https://github.com/Ozymandias9000/drinkful_v1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              </p>
              <p>
                Drinkful (w/ API)
                <h6>React, Punk API</h6>
              </p>
              <p>
                <a
                  href="https://drinkful-hzlxekwgbi.now.sh/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View App
                </a>
              </p>
            </div>
          </div>

          <div className="panel panel4">
            <div className="overlay">
              <p>
                <a
                  href="https://github.com/Ozymandias9000/delicious-node-course"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              </p>
              <p>
                Now That's Delicious!
                <h6>Node/Express, Pug, MongoDB, Passport</h6>
              </p>
              <p>
                <a
                  href="https://now-thats-delicious-murphy.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View App
                </a>
              </p>
            </div>
          </div>

          <div className="panel panel5">
            <div className="overlay">
              <p>
                <a
                  href="https://github.com/Ozymandias9000/murphystagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              </p>
              <p>
                Murphystagram
                <h6>React, Redux, Firebase</h6>
              </p>
              <p>
                <a
                  href="https://murphystagram.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View App
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Projects;
