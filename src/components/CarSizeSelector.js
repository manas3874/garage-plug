import React from "react";
import NavBar from "./NavBar";
import MainButton from "./MainButton";
import ServiceCard from "./ServiceCard";
const CarSizeSelector = () => {
  return (
    <div className="service-selector-page">
      <NavBar />
      <h2 className="service-selector-page--header">Car size</h2>
      <div className="service-selector-page--services">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
      <MainButton name="continue" link="/carsize" />
    </div>
  );
};

export default CarSizeSelector;
