import React, {Component} from "react";
import "./styles/Packages.css";

class Packages extends Component{
  render(){
    return(
      <div className="tsection packages">
        <h3 className="title">Tour Packages</h3>
        <p>We offer a variety of mountaineering packages. Wheter you've climbed Everest or don't even know what a
        mountain is, we've got the perfect vacation for you.</p>
        <hr></hr>
        <ul className="tgrid">
          <li>
            <i className="fa fa-compass fa-4x"></i>
            <h4>Guided Trips</h4>
            <p>Looking for the complete experience? Take a tour with one of our experts. They'll show you sectrets that you're likely to miss otherwise.</p>
          </li>
          <li>
            <i className="fa fa-camera-retro fa-4x"></i>
            <h4>Photo Trips</h4>
            <p>Want to experience nature's beauty without all of that annoying exercise? Take a photo tour on one
            of our mountain buses.</p>
          </li>
          <li>
            <i className="fa fa-bicycle fa-4x"></i>
            <h4>Biking Trips</h4>
            <p>If bicycles are more your speed, consider taking a tour through one of our mountain bike paths.
            We'll provide the bikes, and lunch too!</p>
          </li>
          <li>
            <i className="fa fa-flag-checkered fa-4x"></i>
            <h4>Racing Trips</h4>
            <p>Got a competitive spirit? Sign up for one of our mountain marathons! Try to reach the summit before anyone else.</p>
          </li>
        </ul>
      </div>
    )
  }
}

export default Packages;
