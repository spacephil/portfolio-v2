import React, {Component} from "react";
import "./styles/Hero.css";

class Hero extends Component{
  render(){
    return(
      <div className="tsection hero">
        <div className="background-image"></div>
        <div className="hero-content-area">
          <h1>Mountain Travel</h1>
          <h3>Unmissable Adventure Tours Around The World</h3>
          <div className="ancor btn">Contact Us Now</div>
        </div>
      </div>
    )
  }
}

export default Hero;
