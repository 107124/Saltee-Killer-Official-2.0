import React from "react";
import NavBar from "./navigation";
import Iframe from 'react-iframe'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';


import "./styles/store.css";

export default class Store extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="store-page">


        <div className="store-container">
          <Slide left>
            {/* <div className="store-header">
              <p>Store</p>
            </div> */}
          <div className="iframe-container">
            <Iframe
              url="https://www.salteekiller.store/"
              width="100%"
              height="100%"
              className="store"
              display="initial"
              // position="relative"
              />
          </div>
              </Slide>
        </div>
      </div>
    );
  }
}
