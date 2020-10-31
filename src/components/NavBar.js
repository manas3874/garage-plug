import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-bar--left">
        <Link to="/">home</Link>
        <Link to="/">about</Link>
      </div>
      <div className="nav-bar--logo">GaragePlug</div>
      <div className="nav-bar--right">
        <input type="text" name="search-bar" id="" />
        <label htmlFor="search-bar">search</label>
      </div>
    </div>
  );
};

export default NavBar;
