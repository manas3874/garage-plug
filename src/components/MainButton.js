import React from "react";
import { Link } from "react-router-dom";
const MainButton = (props) => {
  return (
    <div>
      <Link className="main-button" to={props.link}>
        {props.name}
      </Link>
    </div>
  );
};

export default MainButton;
