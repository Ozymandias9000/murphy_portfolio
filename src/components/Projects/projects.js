import React, { Component } from "react";
import "./projects.css";

class Projects extends Component {
  render() {
    return (
      <div className="projects-container">
        <img
          src="https://cdn.tourradar.com/s3/tour/original/93351_905da8be.jpg"
          alt="pic"
        />

        <section className="panels-container">
          <span id="projects" />
          <div className="panel panel1">
            <p>
              {/*<a
                href="https://github.com/Ozymandias9000/drinkful_v1"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>{*/}
            </p>

            <p>
              Drinkful
              {/*<a
                href="https://drinkful-athpeiqvoa.now.sh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View App
              </a>{*/}
            </p>
          </div>
          <div className="panel panel2">
            <p>
              {/*<a
                href="https://github.com/Ozymandias9000/todolocalstorage/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Source
              </a>{*/}
            </p>
            <p>
              To-Do List (Local Storage)
              {/*<a
                href="https://ozymandias9000.github.io/todolocalstorage/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View App
              </a>{*/}
            </p>
          </div>
        </section>
      </div>
    );
  }
}

export default Projects;
