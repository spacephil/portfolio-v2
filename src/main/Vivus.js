import React, {Component} from "react";
import ReactVivus from "react-vivus";
import svg from "./assets/me-lines1.svg";

class Vivus extends Component {
  render(){
    return(
      <ReactVivus
       id="me"
       option={{
         file: svg,
         animTimingFunction: 'EASE-IN',
         type: 'sync',
         duration: 300
       }}
       style={{ height: '80%', width: '80%'}}
     />
    )
  }
}

export default Vivus;
