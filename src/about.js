import React from "react";
import NavBar from "./navigation";

import "./styles/about.css";

export default class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="about-page">
        <NavBar />
        about
      </div>
    );
  }
}
