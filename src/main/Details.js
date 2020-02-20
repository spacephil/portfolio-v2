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
            {project.gif.map((g,i) =>
              <div key={i} className="details-gif">
                <h3>Impressionen:</h3>
                <img src={g} alt={project.titel + " gif"}></img>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Details;
