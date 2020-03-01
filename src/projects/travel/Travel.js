import React, {Component} from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Destinations from "./Destinations";
import Packages from "./Packages";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";

import "./styles/Travel.css"

class Travel extends Component{
  render(){
    return(
      <div className="travel">
        <Navbar />
        <Hero />
        <Destinations />
        <Packages />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    )
  }
}


export default Travel;
