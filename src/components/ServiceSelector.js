import React, { Component } from "react";
import NavBar from "./NavBar";
import ServiceCard from "./ServiceCard";
import MainButton from "./MainButton";
class ServiceSelector extends Component {
  render() {
    return (
      <div className="service-selector-page">
        <NavBar />
        <h2 className="service-selector-page--header">Services</h2>
        <div className="service-selector-page--services">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
        <MainButton name="continue" link="/carsize" />
      </div>
    );
  }
}

export default ServiceSelector;
