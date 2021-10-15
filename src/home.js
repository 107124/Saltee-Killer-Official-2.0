import React from "react";
import NavBar from "./navigation";
import Tilt from "react-parallax-tilt";
import WhatsNew from "./components/whatsNew";

import "./styles/home.css";

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="home-page">
        <NavBar />
        <div className="kent-header">
          <Tilt
            className="tilt"
            tiltEnable={true}
            scale={1}
            perspective={1000}
            glareEnable={true}
            transitionSpeed={1500}
            glareMaxOpacity={0.8}
            glareColor="#ffffff"
            glarePosition="bottom"
          >
            <p>KENT</p>
          </Tilt>
          <div className="subheading">
            <h6>DEVELOPER</h6>
            <h6>DESIGNER</h6>
            <h6>YOUTUBER</h6>
            <h6>TEACHER</h6>
            <h6>MENTOR</h6>
          </div>
        </div>
        <div className="whats-new">
          <WhatsNew/>
        </div>
      </div>
    );
  }
}
