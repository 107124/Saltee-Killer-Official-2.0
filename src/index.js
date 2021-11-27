import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./home";
import Contact from "./contact";
import Store from "./store";
import Videos from "./videos";
import Projects from "./projects";
import Resume from "./resume";
import Footer from "./components/footer";
import NavBar from "./navigation";

import "./styles/styles.css";

class Index extends React.Component {
  render() {
    return (
      <div className="stuff">

        <BrowserRouter>
          <div className="nav-bar-wrapper">
            <NavBar />
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />
            <Route path="/store" component={Store} />
            <Route path="/videos" component={Videos} />
            <Route path="/contact" component={Contact} />
            <Route path="/resume" component={Resume} />
          </Switch>
        </BrowserRouter>

        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);
