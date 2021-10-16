import React from "react";
import NavBar from "./navigation";
import Iframe from 'react-iframe'

import "./styles/store.css";

export default class Store extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="store-page">
        <div>
          <NavBar />
        </div>
        <div className="store-container">
          <Iframe
            url="https://www.salteekiller.store/"
            width="100%"
            height="100%"
            className="store"
            display="initial"
          // position="relative"
          />
        </div>
      </div>
    );
  }
}
