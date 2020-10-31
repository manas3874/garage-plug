import React, { Component } from "react";
import axios from "axios";

class CarSizeCard extends Component {
  state = { carImages: [] };

  componentDidMount() {
    console.log(this.state);
    if (!this.state.carImages.length) {
      axios
        .get("https://5f9c52f6856f4c00168c87f7.mockapi.io/admin/api/dataset")
        .then((response) => {
          console.log(response.data);
          this.setState({ carImages: response.data[0].carImages });
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
          background: `url(${this.state.carImages[this.props.id]})`,
        }}
      >
        <input
          type="radio"
          className="main-card--checkbox"
          name="radio"
          id={this.props.id}
        />
        <h2>{this.props.cardTitle}</h2>
      </div>
    );
  }
}

export default CarSizeCard;
