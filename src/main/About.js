import React, {Component} from "react";
import "./styles/About.css";

class About extends Component{
  render(){
    return(
      <div className="about">
        <h2 className="about-title">About</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              Ein persönliches Gespräch sagt mehr als tausend Buchstaben im Internet.
            </p>
            <p>
              Dennoch bin ich wissbegierig, offen für neue Techniken und Tools und kann mich schnell in neue Themen einarbeiten.
              Ich arbeite nicht nur gerne mit anderen zusammen, sondern auch alleine. Ich weiß wo technisch meine Stärken und Schwächen liegen und bemühe mich stetig darum mich zu verbessern.
              Auch das selbstständige und eigenverantwortliche Arbeiten liegt mir sehr.
            </p>
            <p>
              Das Beste an der Zusammenarbeit mit mir ist, dass ich immer positiv und optimistisch Problemen entgegen sehe und ich auch unter Stress die Ruhe bewahre.
            </p>
          </div>
          <div className="about-foto">
            <p>Skills:</p>
              <ul>
                <li>HTML / CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>Java</li>
                <li>NodeJs mit MongoDB</li>
                <li>ReactJs</li>
                <li>Git</li>
                <li>Adobe Creative Suite</li>
              </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default About;
