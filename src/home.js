import React from "react";
import NavBar from "./navigation";
import Tilt from "react-parallax-tilt";

import "./styles/home.scss";

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="home-page">
        <NavBar />
        <div>home</div>
        <div className="kent-header">
          <Tilt
            className="tilt"
            tiltEnable={true}
            scale={1}
            perspective={500}
            glareEnable={true}
            transitionSpeed={1500}
            glareMaxOpacity={0.8}
            glareColor="#ffffff"
            glarePosition="bottom"
          >
            <h1>KENT</h1>
          </Tilt>
        </div>
      </div>
    );
  }
}
