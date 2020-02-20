import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./styles/Navbar.css";

class Navbar extends Component{
  render(){
    return(
      <div className="navbar">
        <Link to="/" className="navbar-logo">workwithphilip</Link>
        <a href="mailto:contact@workwithphilip.me" className="navbar-contact">Contact</a>
      </div>
    )
  }
}

export default Navbar;
