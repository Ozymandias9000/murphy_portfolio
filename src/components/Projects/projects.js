import React, { Component } from "react";
import "./projects.css";

class Projects extends Component {
  render() {
    return (
      <section>
        <span id="projects" />
        <div className="project-text">
          <h3>Projects</h3>
        </div>

        <div className="panels-container">
          <div className="panel panel1">
            <p>
              {/*<a
                href="https://smart-brain-nm.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Smart Brain
              </a>{*/}{" "}
            </p>
            <p>
              Smart Brain
              {/*<a
                href="https://github.com/Ozymandias9000/face-recog/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Source
              </a>{*/}
            </p>
          </div>
          <div className="panel panel2">
            <p>
              {/*<a
                href="https://github.com/Ozymandias9000/background-generator/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Source
              </a>{*/}
            </p>
            <p />
            <p>
              Background Generator
              {/*<a
                href="https://ozymandias9000.github.io/background-generator/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View App
              </a>{*/}
            </p>
          </div>
          <div className="panel panel3">
            <p>
              {/*<a
                href="https://github.com/Ozymandias9000/todolocalstorage/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Source
              </a>{*/}
            </p>
            <p />
            <p>
              To-Do with Local Storage
              {/*<a
                href="https://ozymandias9000.github.io/todolocalstorage/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View App
              </a>{*/}
            </p>
          </div>
          <div className="panel panel4">
            <p>
              {/*<a
                href="https://codepen.io/Aristocles/pen/gmyrme"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on CodePen
              </a>{*/}
            </p>
            <p />
            <p>
              Pomodoro Clock
              {/*<a
                href="https://codepen.io/Aristocles/full/gmyrme/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View App
              </a>{*/}
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
