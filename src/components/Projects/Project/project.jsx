import React, { Component } from "react";

export default class Project extends Component {
  render() {
    const {
      i,
      gitLink,
      projectTitle,
      projectDescription,
      appLink
    } = this.props;
    return (
      <div className={`panel panel${i}`}>
        <div className="overlay">
          <p>
            <a href={gitLink} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </p>
          <div>
            {projectTitle}
            <p>{projectDescription}</p>
          </div>
          <p>
            <a href={appLink} target="_blank" rel="noopener noreferrer">
              View App
            </a>
          </p>
        </div>
      </div>
    );
  }
}
