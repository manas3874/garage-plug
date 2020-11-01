import React, { Component } from "react";
import axios from "axios";

class MainCard extends Component {
  state = { serviceImages: [], servicePrices: [] };
  componentDidMount() {
    console.log(this.state);

    if (!this.state.serviceImages.length) {
      // this.serviceImageSetter();
      
      axios
        .get("https://5f9c52f6856f4c00168c87f7.mockapi.io/admin/api/dataset")
        .then((response) => {
          console.log(response.data);
          this.setState({
            serviceImages: response.data[1].serviceImages,
            servicePrices: response.data[2].servicePrices,
          });
          if (this.props.func) {
            this.props.func(this.state.servicePrices);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
  render() {
    return (
      <div
        className="main-card"
        style={{
          background: `url(${this.state.serviceImages[this.props.name]})`,
        }}
      >
        <input
          type="checkbox"
          className="main-card--checkbox"
          name={this.props.name}
          // data-url="https://i.ibb.co/n6gJWQ9/car-7.png"
          id={this.props.cardTitle}
        />
        <div className="main-card--details">
          <h2>{this.props.cardTitle}</h2>
          <h2>{this.state.servicePrices[this.props.name]} INR</h2>
        </div>
      </div>
    );
  }
}

export default MainCard;
