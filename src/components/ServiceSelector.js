import React, { Component } from "react";
import NavBar from "./NavBar";
import MainCard from "./MainCard";
import MainButton from "./MainButton";
class ServiceSelector extends Component {
  state = { services: [], serviceTitle: [], allPrices: [], prices: [] };
  selectionHandler = (ev) => {
    console.log(ev.target.id + " is " + ev.target.checked);
    let arr = this.state.services;
    ev.target.checked ? arr.push(ev.target.name) : arr.pop(ev.target.name);
    // this.setState({ services: [1, 2, 3] });
    this.setState({ services: arr });

    let arr2 = this.state.prices;
    ev.target.checked
      ? arr2.push(this.state.allPrices[ev.target.name])
      : arr.pop(this.state.allPrices[ev.target.name]);
    let arr3 = this.state.serviceTitle;
    ev.target.checked ? arr3.push(ev.target.id) : arr3.pop(ev.target.id);
    // this.setState({ services: [1, 2, 3] });
    this.setState({ serviceTitle: arr3 });
    console.log(this.state);
  };

  statePricesSetter = (prices) => {
    this.setState({ allPrices: prices });
  };
  render() {
    return (
      <div className="service-selector-page">
        <NavBar />
        <h2 className="service-selector-page--header">Services</h2>
        <div
          className="service-selector-page--services"
          onClick={this.selectionHandler}
        >
          <MainCard cardTitle="one" name="1" func={this.statePricesSetter} />
          <MainCard cardTitle="two" name="2" />
          <MainCard cardTitle="three" name="3" />
          <MainCard cardTitle="four" name="4" />
          <MainCard cardTitle="five" name="5" />
          <MainCard cardTitle="six" name="6" />
          <MainCard cardTitle="seven" name="7" />
          <MainCard cardTitle="eight" name="8" />
        </div>
        <MainButton name="continue" link="/carsize" data={this.state} />
      </div>
    );
  }
}

export default ServiceSelector;
