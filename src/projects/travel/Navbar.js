import React, {Component} from "react";
import "./styles/Navbar.css";

class Navbar extends Component{
  render(){
    return(
      <div className="tnavbar">
        <h2><div className="ancor">Mountain Travel</div></h2>
        <nav>
          <li><div className="ancor">Tours</div></li>
          <li><div className="ancor">About</div></li>
          <li><div className="ancor">Contact</div></li>
        </nav>
      </div>
    )
  }
}

export default Navbar;
