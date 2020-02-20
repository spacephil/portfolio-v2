import React, {Component} from "react";
import "./styles/Main.css";

import Navbar from "./Navbar";
import Header from "./Header";
import ProjectView from "./ProjectView";
import About from "./About";
import Contact from "./Contact";

class Main extends Component{
  render(){
    return(
      <div className="main">
        <Navbar />
        <Header />
        <ProjectView projects={this.props.projects}/>
        <About />
        <Contact />
      </div>
    )
  }
}

export default Main;
