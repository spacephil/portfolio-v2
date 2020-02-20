import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./styles/ProjectCard.css";

class ProjectCard extends Component{
  render(){
    const {project} = this.props;
    return(
      <div className="projectcard" key={project.id}>
        <div className={"projectcard-img " + project.id}>
          <h2>{project.title}</h2>
        </div>
        <div className="projectcard-container">
          <ul className="projectcard-tags">
            {project.tags.map((t, i) => <li key={i}>{t}</li>)}
          </ul>
          <p className="projectcard-sdescription">{project.sdescription}</p>
          <div className="projectcard-button-wrapper">
            {project.livesite && (
              <Link to={project.id} target="_blank" rel="noopener noreferrer" className="projectcard-button">Live-Site</Link>
            )}
            <Link to={project.id + "/details"} className="projectcard-button">Details</Link>
            <a href={project.github} className="projectcard-button">Github</a>
          </div>
          <p className="projectcard-note">{project.note}</p>
        </div>
      </div>
    )
  }
}

export default ProjectCard;
