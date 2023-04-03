import React, { useState, useEffect } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

let NavBar = () => {
  return (
    <div className="navbarContainer">
      <div className="navbar">
        <Link className="homepageLink" to="/">
          <h3 className="appTitle">RIPDb</h3>
        </Link>
        <h3>Menu</h3>
        <input type="text" placeholder="Search..." />
      </div>
      <div className="spacer"></div>
    </div>
  );
};
export default NavBar;
