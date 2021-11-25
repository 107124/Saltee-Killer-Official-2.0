import React from "react";
import emailjs from "emailjs-com"

import NavBar from "./navigation";
import "./styles/contact.css";

let sendEmail = function(e) {
  e.preventDefault();

  emailjs.sendForm('service_j481tzf', 'template_wbr46wf', e.target, 'user_WpLvYUKh59KgaFazMjV56')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
}

export default class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <div className="contact-page">
        <NavBar />
        <form onSubmit={sendEmail}>
          <input placeholder="Name" type="text" name="name" />
          <input placeholder="Subject" type="text" name="subject" />
          <input placeholder="Email" type="email" name="email" />
          <textarea placeholder="Message" name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    );
  }
}
