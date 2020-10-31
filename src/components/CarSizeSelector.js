import React, { Component } from "react";
import NavBar from "./NavBar";
import MainButton from "./MainButton";
import CarSizeCard from "./CarSizeCard";
class CarSizeSelector extends Component {
  state = {
    services: this.props.location.query.services,
    carSize: "1",
    prices: this.props.location.query.prices,
    serviceTitle: this.props.location.query.serviceTitle,
  };

  selectionHandler = (ev) => {
    // console.log(ev.target.id + " is " + ev.target.checked);
    // let arr = this.state.services;
    // ev.target.checked ? arr.push(ev.target.name) : arr.pop(ev.target.name);
    // // this.setState({ services: [1, 2, 3] });
    this.setState({ carSize: ev.target.id });
    setTimeout(() => {
      console.log(this.state.carSize);
    }, 100);
  };
  render() {
    return (
      <div className="service-selector-page" onClick={console.log(this.state)}>
        <NavBar />
        <h2 className="service-selector-page--header">Car size</h2>
        <p></p>
        <div
          className="service-selector-page--services"
          onClick={this.selectionHandler}
        >
          <CarSizeCard cardTitle="one" id="1" />
          <CarSizeCard cardTitle="two" id="2" />
          <CarSizeCard cardTitle="three" id="3" />
          <CarSizeCard cardTitle="four" id="4" />
          <CarSizeCard cardTitle="three" id="5" />
          <CarSizeCard cardTitle="four" id="6" />
        </div>
        <MainButton name="continue" link="/cartdetails" data={this.state} />
      </div>
    );
  }
}

export default CarSizeSelector;
