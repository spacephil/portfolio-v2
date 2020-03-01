import React, {Component} from "react";
import "./styles/Testimonials.css";

class Testimonials extends Component{
  render(){
    return(
      <div className="tsection testimonials">
        <h3 className="title">Testimonials from our adventureres:</h3>
        <hr></hr>
        <p className="quote">Amazing Tour. It made me realize how much I love the mountain view. </p>
        <p className="author">- Grant Williams </p>
        <p className="quote">Before I booked a tour I never enjoyed a trip to the mountains. Now I can say that I will book another trip.</p>
        <p className="author">- Abigayle Gillespie</p>
        <p className="quote">If you just want something spectacular, try one of the tours. You get a totally new perspective on life.</p>
        <p className="author">- Tony Kelley</p>
      </div>
    )
  }
}

export default Testimonials;
