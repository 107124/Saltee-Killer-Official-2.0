import React from "react";
import { NavLink } from "react-router-dom";

import "./styles/navigation.css";
import Logo from "./images/logo.PNG";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="nav-bar-container">
        <div className="left-links">
          <NavLink to="/" activeClassName="active" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/projects" activeClassName="active" className="nav-link">
            Projects
          </NavLink>
          <NavLink to="/videos" activeClassName="active" className="nav-link">
            Videos
          </NavLink>
        </div>
        <div className="logo">
          <img src={Logo} alt="SalteeKiller" />
        </div>
        <div className="right-links">
          <NavLink to="/store" activeClassName="active" className="nav-link">
            Store
          </NavLink>
          <NavLink to="/resume" activeClassName="active" className="nav-link">
            Resume
          </NavLink>
          <NavLink to="/contact" activeClassName="active" className="nav-link">
            Contact
          </NavLink>
        </div>
      </div>
    );
  }
}
