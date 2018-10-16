import React, { Component } from "react";
import Project from "./Project/project";
import "./projects.css";

class Projects extends Component {
  render() {
    return (
      <div className="projects-container">
        <span id="projects" />
        <h1>Projects</h1>
        <section className="panels-container">
          <Project
            i={1}
            gitLink="https://github.com/Ozymandias9000/drinkful"
            projectTitle="Drinkful"
            projectDescription="React PWA, Web Scraping, Stylus"
            appLink="https://drinkful-murphy.herokuapp.com/"
          />
          <Project
            i={2}
            gitLink="https://github.com/Ozymandias9000/baybio"
            projectTitle="Baybio"
            projectDescription="React, Reach, Firebase, Stylus"
            appLink="https://baybio.herokuapp.com/"
          />
          <Project
            i={3}
            gitLink="https://github.com/Ozymandias9000/murphystagram"
            projectTitle="Murphystagram"
            projectDescription="React, Redux, Firebase"
            appLink="https://murphystagram.herokuapp.com/"
          />
          <Project
            i={4}
            gitLink="https://github.com/Ozymandias9000/murphy-notes"
            projectTitle="Murphy Notes"
            projectDescription="Express, Pug, MongoDB, Stylus"
            appLink="https://murphy-notes.herokuapp.com/"
          />
          <Project
            i={5}
            gitLink="https://github.com/Ozymandias9000/delicious-node-course"
            projectTitle="Now That's Delicious!"
            projectDescription="Node/Express, Pug, MongoDB, Passport"
            appLink="https://now-thats-delicious-murphy.herokuapp.com/"
          />
          <Project
            i={6}
            gitLink="https://github.com/Ozymandias9000/drinkful_v1"
            projectTitle="Drinkful (w/ API)"
            projectDescription="React, Punk API"
            appLink="https://drinkful-hzlxekwgbi.now.sh"
          />
        </section>
      </div>
    );
  }
}

export default Projects;
