import React from "react";
import { FaGithub, FaEye } from "react-icons/fa6";
import projectData from './projectData.js';
import "./App.css";

function Projects() {
  return (
    <div className="projects-container">
      {projectData.map((project) => (
        <div key={project.id} className="project-div">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-language">{project.language}</p>
          <img src={project.imageSrc} alt={project.title} className="projects-image" />
          <p className="project-desc">{project.description}</p>
          <div className="project-links">
            <div className="link-section">
              <div className="external-link">
                <FaGithub className="link-icon" />
                <a href={project.gitHub} target="_blank" rel="noreferrer" className="link">
                  Github repo
                </a>
              </div>
              <div className="external-link">
                <FaEye className="link-icon" />
                <a href={project.liveVersion} target="_blank" rel="noreferrer" className="link">
                  Live version
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
