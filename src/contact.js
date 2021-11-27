import React from "react";
import emailjs from "emailjs-com"
import Swal from "sweetalert2"

import NavBar from "./navigation";
import "./styles/contact.css";



export default class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sendStatus : "Send"
    };
  }

  sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j481tzf', 'template_wbr46wf', e.target, 'user_WpLvYUKh59KgaFazMjV56')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

      e.target.reset()
      this.showAlert()
  };

  showAlert = () => {
    Swal.fire({
      title: 'Message Sent',
      text: "Your message was successfully sent to Kent!",
      type: 'success',
    })
  }





  render() {
    return (
      <div className="contact-page">

        <div className="contact-box">
          <div className="left-side">
            Message Kent
          </div>
          <div className="right-side">

            <form onSubmit={this.sendEmail}>
              <input className="input" placeholder="Name" type="text" name="name" />
              <input className="input" placeholder="Subject" type="text" name="subject" />
              <input className="input" placeholder="Email" type="email" name="email" />
              <textarea placeholder="Message" name="message" />
              <input className="button" type="submit" value={this.state.sendStatus} />

            </form>
          </div>
        </div>

      </div>

    );
  }
}
