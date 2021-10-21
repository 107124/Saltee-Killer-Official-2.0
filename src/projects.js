import React from "react";
import ProjectCard from "./components/ProjectCard";
import NavBar from "./navigation";

import "./styles/projects.css";

export default class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="projects-page">
        <NavBar />
        <div className="card-section">
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
        </div>
      </div>
    );
  }
}
