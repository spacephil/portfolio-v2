import React, {Component} from "react";
import "./styles/ProjectView.css";

import ProjectCard from "./ProjectCard";

class ProjectView extends Component{
  render(){
    return(
      <div className="projectview">
        <h2 className="projectview-title">Projects</h2>
        <div className="projectview-grid">
          {this.props.projects.map(p =><ProjectCard key={p.id} project={p}/>)}
        </div>
      </div>
    )
  }
}

export default ProjectView;
