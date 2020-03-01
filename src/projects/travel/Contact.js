import React, {Component} from "react";
import "./styles/Contact.css";

class Contact extends Component{
  render(){
    return(
      <div className="tsection tcontact">
        <h3 className="title">Learn more</h3>
        <p>Want to know about our upcoming mountain-related events, or come to one of our mixers? Just sign up
          for our mailing list. No spam from us, we promise! Except for the spam we give you to keep up your energy
        while you're hiking through the mountains. We have tons of that.</p>
        <hr></hr>
        <form>
          <input type="email" placeholder="E-Mail"></input>
          <div className="ancor btn">Subscribe Now</div>
        </form>
      </div>
    )
  }
}

export default Contact;
