import React, { useState, useEffect } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import Search from "./Search";

let NavBar = () => {
  let showMenu = () => {
    let menu = document.querySelector(".menu");
    menu.style.transform = "translateY(0)";
    menu.addEventListener("click", () => {
      menu.style.transform = "translateY(-100%)";
    });
  };
  return (
    <div>
      <div className="headerContainer">
        <Link className="homepageLink" to="/">
          <h3 className="appTitle">RIPDb</h3>
        </Link>
        <h3 onClick={showMenu}>Menu</h3>
        <Search />
      </div>
      <div className="menu">
        <h3>Trending</h3>
        <h3>Upcoming</h3>
      </div>
    </div>
  );
};
export default NavBar;
