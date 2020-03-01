import React, {Component} from "react";
import "./styles/Destinations.css"

class Destinations extends Component{
  render(){
    return(
      <div className="tsection destinations">
        <h3 className="title">Some of our destinations:</h3>
        <p>Tired of the ocean? Are the plains too plain? Come along with us on one of our mountain adventures.
          Here are some pictures from people who have had elevated experiences with us.</p>
        <hr></hr>
        <ul className="tgrid">
          <li className="small" id="one"></li>
          <li className="large" id="two"></li>
          <li className="large" id="three"></li>
          <li className="small" id="four"></li>
        </ul>
      </div>
    )
  }
}

export default Destinations;
