import React, { useState, useEffect } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

let NavBar = () => {
  let showMenu = () => {
    let menu = document.querySelector(".menu");
    menu.style.transform = "translate(0)";
    menu.addEventListener("click", () => {
      menu.style.transform = "translateY(-100vh)";
    });
  };
  return (
    <div>
      <div className="menu">
        <h3>Trending</h3>
        <h3>Upcoming</h3>
      </div>
      <div className="navbarContainer">
        <div className="navbar">
          <Link className="homepageLink" to="/">
            <h3 className="appTitle">RIPDb</h3>
          </Link>
          <h3 onClick={showMenu}>Menu</h3>
          <input type="text" placeholder="Search..." />
        </div>
        <div className="spacer"></div>
      </div>
    </div>
  );
};
export default NavBar;
