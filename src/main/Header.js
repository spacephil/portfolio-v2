import React, {Component} from "react";
import Vivus from "./Vivus.js"
import "./styles/Header.css";

class Header extends Component{
  render(){
    return(
      <div className="header">
        <div className="header-grid">
          <Vivus className="header-vivus" />
          <div className="header-text">
            <div className="header-text-box">
              <h1>Philip Niebecker</h1>
              <h3>Webentwickler | Designer | Student</h3>
            </div>
          </div>
        </div>
        <div className="header-arrow"></div>
      </div>
    )
  }
}

export default Header;
