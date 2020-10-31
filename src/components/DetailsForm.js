import React, { Component } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import MainButton from "./MainButton";
class DetailsForm extends Component {
  state = { totalPrice: 0 };
  componentDidMount() {
    this.setState({ totalPrice: this.props.location.query });
  }
  chosenDate = () => {
    if (
      document.querySelector(".day .is-selected") &&
      document.querySelector(".month .is-selected") &&
      document.querySelector(".year .is-selected")
    ) {
      console.log(document.querySelector(".day .is-selected").innerHTML);
      console.log(document.querySelector(".month .is-selected").innerHTML);
      console.log(document.querySelector(".year .is-selected").innerHTML);
    }
  };

  paymentMethodHandler = (ev) => {
    console.log(ev.target.className);
    const paymentMethodSelector = document.querySelector(
      ".details-form--payment"
    );
    const cardRemover = document.querySelector(".card");
    const cashRemover = document.querySelector(".cash");
    if (ev.target.className == "details-form--payment__cash") {
      cardRemover && cardRemover.remove();
      cashRemover ||
        paymentMethodSelector.insertAdjacentHTML(
          "afterend",
          `<p class="cash" style="text-align: center;
          font-size: 1.5rem;">We will collect the cash after the delivery of your car</p>`
        );
    }
    if (ev.target.className == "details-form--payment__card") {
      cashRemover && cashRemover.remove();
      cardRemover ||
        paymentMethodSelector.insertAdjacentHTML(
          "afterend",
          `<div class="card" >
        <div className="left" style="display: flex;
        flex-direction: column;
        align-items: center; margin-bottom:2rem;">
          <h2 style="margin-bottom:1rem;">Credit/Debit card number</h2>
          <input type="text" />
        </div>
        <div className="middle" style="display: flex;
        flex-direction: column;
        align-items: center;  margin-bottom:2rem;">
          <h2 style="margin-bottom:1rem;">Expiry date</h2>
          <div>
            <input type="text" style="width: 5rem;"/>
            <input type="text" style="width: 5rem;"/>
          </div>
        </div style="display: flex;
        flex-direction: column;
        align-items: center;  margin-bottom:2rem;">
        <h2 style="margin-bottom:1rem;">CVV number</h2>
        <input type="text" className="right" style="width: 5rem;"/>
      </div>`
        );
    }
  };
  render() {
    const optionsDays = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
    ];
    const optionsMonths = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const optionsYears = [2020, 2021, 2022];
    // const defaultOption = options[0];
    return (
      <div className="details-form">
        <form onClick={console.log(this.state.totalPrice)}>
          <label htmlFor="full-name">
            full-name <input type="text" name="full-name" required />
          </label>
          <div className="details-form--contact">
            <label htmlFor="email">
              email
              <input type="email" name="email" required />
            </label>
            <label htmlFor="contact">
              contact <input type="tel" name="tel" required />
            </label>
          </div>

          <div className="details-form--dropdown">
            <Dropdown
              options={optionsDays}
              onChange={this._onSelect}
              // value={defaultOption}
              placeholder="Select a day"
              className="day"
              required
            />
            <Dropdown
              options={optionsMonths}
              onChange={this._onSelect}
              // value={defaultOption}
              placeholder="Select a month"
              className="month"
              required
            />
            <Dropdown
              options={optionsYears}
              onChange={this._onSelect}
              // value={defaultOption}
              placeholder="Select a year"
              className="year"
              required
            />
          </div>
          {/* <a href="#" onClick={this.chosenDate}>
            press me
          </a> */}
        </form>
        <div
          className="details-form--payment"
          onClick={this.paymentMethodHandler}
        >
          <input
            type="radio"
            name="payment-method"
            className="details-form--payment__cash"
          />
          <input
            type="radio"
            name="payment-method"
            className="details-form--payment__card"
          />
        </div>

        <MainButton
          name="continue"
          link="/checkout"
          // data={sum(Array(this.state.prices))}
        ></MainButton>
      </div>
    );
  }
}

export default DetailsForm;
