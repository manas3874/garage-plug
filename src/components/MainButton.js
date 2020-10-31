import React from "react";
import { Link } from "react-router-dom";
const MainButton = (props) => {
  return (
    <div className="main-button--wrapper">
      <Link
        className="main-button"
        to={{ pathname: props.link, query: props.data }}
      >
        {props.name}
      </Link>
    </div>
  );
};

export default MainButton;
