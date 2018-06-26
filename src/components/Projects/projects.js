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

        <h1>...</h1>
        <span id="projects" />
        <section className="panels-container">
          <div className="panel panel1">
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
              <p>Drinkful (w/ API)</p>
              <p>
                <a
                  href="https://drinkful-athpeiqvoa.now.sh/"
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
                  View Source
                </a>
              </p>
              <p>To-Do List (Local Storage)</p>
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
                  href="https://github.com/Ozymandias9000/todolocalstorage/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Source
                </a>
              </p>
              <p>Drinkful (w/ Web Scraping)</p>
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
          <div className="panel panel4">
            <div className="overlay">
              <p>
                <a
                  href="https://github.com/Ozymandias9000/todolocalstorage/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Source
                </a>
              </p>
              <p>Now That's Delicious!</p>
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
        </section>
      </div>
    );
  }
}

export default Projects;
