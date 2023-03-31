import React, { useState, useEffect } from "react";
import "./NavBar.css";

let NavBar = () => {
  return (
    <div className="navbarContainer">
      <div className="navbar">
        <h3 className="appTitle">RIPDb</h3>
        <h3>Menu</h3>
        <input type="text" placeholder="Search..." />
      </div>
      <div className="spacer"></div>
    </div>
  );
};
export default NavBar;
