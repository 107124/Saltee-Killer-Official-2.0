import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./home";
import About from "./about";
import Store from "./store";
import Videos from "./videos";

import "./styles/styles.css";

class Index extends React.Component {
  render() {
    return (
      <div className="stuff">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/store" component={Store} />
            <Route path="/videos" component={Videos} />
            <Route path="/about" component={About} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);
