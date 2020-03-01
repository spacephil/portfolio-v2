import React, {Component} from "react";
import Navbar from "./Navbar.js";

import "./styles/Details.css";

class Details extends Component{

  render(){
    const {project} = this.props
    return(
      <div className="details">
        <Navbar />
        <div className="details-wrapper">
          <div className="details-content">
            <h1 className="details-content-title">{project.title}</h1>
              <div className="details-content-image">
                <img src={project.gif} alt={project.title}></img>
              </div>
            {project.mdescription.map((d, i) =>
              <div key={i} className="details-content-description">
                <p>{d}</p>
                <br></br>
              </div>
            )}
          {project.possibleUpgrades && (
            <div className="details-upgrades">
              <h3>Mögliche Erweiterungen:</h3>
              <p>{project.possibleUpgrades}</p>
            </div>
          )}
          </div>
        </div>
      </div>
    )
  }
}

export default Details;
