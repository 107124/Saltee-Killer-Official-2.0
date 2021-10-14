import React from "react";
import NavBar from "./navigation";

import "./styles/store.css";

export default class Store extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="store-page">
        <NavBar />
        store
      </div>
    );
  }
}
