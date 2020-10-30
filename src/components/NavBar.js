import React from "react";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-bar--left">
        <p>home</p>
        <p>about</p>
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
