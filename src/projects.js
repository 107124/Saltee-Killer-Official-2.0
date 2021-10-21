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
            <div className="cards">
            <ProjectCard header="DIY Society" image="" link="https://github.com/107124/DIY"/>
            <ProjectCard header="Bank" image="" link="https://scarn-credit-union-banking.herokuapp.com/"/>
            <ProjectCard header="Family Chores" image="https://images.unsplash.com/photo-1533331034407-54ac4ace3562?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80" link="https://family-chores-linked.netlify.com/"/>
            <ProjectCard header="Health Journal" image="" link="https://health-journals.herokuapp.com/welcome"/>
            <ProjectCard header="Dev Fries" image="" link="https://determined-sinoussi-b6e667.netlify.com/"/>
            <ProjectCard header="Nevada Exhaust Cleaning" image="https://images.unsplash.com/photo-1591329207233-c3858778b45a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2370&q=80" link="https://nevada-exhaust-cleaning.netlify.com/"/>
            </div>
        </div>
      </div>
    );
  }
}
