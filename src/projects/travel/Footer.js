import React, {Component} from "react";
import "./styles/Footer.css";

class Footer extends Component{
  render(){
    return(
      <div className="footer">
        <p>Image courtesy of <a href="http://unsplash.com/">unsplash</a>.</p>
        <p>This is just a mockup page. Not working in terms of functionality.</p>
        <ul>
          <li><div className="ancor"><i className="fa fa-twitter-square fa-2x"></i></div></li>
          <li><div className="ancor"><i className="fa fa-facebook-square fa-2x"></i></div></li>
          <li><div className="ancor"><i className="fa fa-snapchat-square fa-2x"></i></div></li>
        </ul>
      </div>
    )
  }
}

export default Footer;
