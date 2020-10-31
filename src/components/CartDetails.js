import React, { Component } from "react";
import MainCard from "./MainCard";
import CarSizeCard from "./CarSizeCard";
import MainButton from "./MainButton";
import { sum } from "mathjs";
// import Date from "date";
class CartDetails extends Component {
  state = {};
  componentDidMount() {
    this.setState(this.props.location.query);
  }

  // totalPriceCalculator = () => {
  //   var total = 0;
  //   for (let i = 0; i < Array(this.state.prices).length; i++) {
  //     total += Array(this.state.prices)[i];
  //   }
  //   return total;
  // };
  render() {
    return (
      <div onClick={console.log(this.state)} className="cart-details">
        <h3>Services chosen</h3>
        {
          <div className="cart-details--services">
            {this.state.services &&
              this.state.services.map((service) => {
                return <MainCard cardTitle="one" name={service} />;
              })}
          </div>
        }
        <h3>Car size</h3>

        {this.state.carSize ? (
          <CarSizeCard
            cardTitle="one"
            id={this.state.carSize}
            className="cart-details--car"
          />
        ) : null}
        <div className="cart-details--total">
          <h2 className="cart-details--total__header">Total</h2>
          <h2 className="cart-details--total__price">
            {sum(Array(this.state.prices))}
          </h2>
        </div>
        <div className="cart-details--btn">
          <MainButton
            name="continue"
            link="/detailsform"
            data={sum(Array(this.state.prices))}
          />
        </div>
      </div>
    );
  }
}

export default CartDetails;
