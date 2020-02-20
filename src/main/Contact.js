import React, {Component} from "react";
import "./styles/Contact.css";

class Contact extends Component{
  render(){
    return(
      <div className="contact">
          <h2 className="contact-title">Contact</h2>
          <div className="contact-field">
              <p>
                Du möchtest mich kontaktieren? <br></br>
                Dann klick einfach hier auf den Knopf.
              </p>
              <a className="contact-button" href="mailto:contact@workwithphilip.me">Magischer E-Mail Button</a>
          </div>
      </div>
    )
  }
}

export default Contact;
