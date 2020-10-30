import React, { Component } from "react";
import { Link } from "react-router-dom";
import MainButton from "./MainButton";
class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <div className="home-page--banner">
          <h2 className="home-page--banner__heading">GaragePlug</h2>
        </div>
        <div className="home-page--hero-content">
          <h4>The Operating System For Auto Repair & Detailing Businesses</h4>
        </div>
        <div className="home-page--action">
          <MainButton name="select services" link="/services" />
        </div>
      </div>
    );
  }
}

export default HomePage;
