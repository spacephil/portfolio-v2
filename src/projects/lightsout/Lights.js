import React, {Component} from "react";
import Board from "./Board.js";

import "./styles/Lights.css";


class Lights extends Component {
  render(){
    return(
      <div className="lights">
        <Board />
      </div>
    )
  }
}

export default Lights;
