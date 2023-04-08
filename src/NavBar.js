import React, { useState, useEffect } from "react";
import "./NavBar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Search from "./Search";
import IconX from "./Icon-X";

let NavBar = () => {
  let showMenu = () => {
    let menu = document.querySelector(".menu");
    menu.style.transform = "translateY(0)";
    menu.addEventListener("click", () => {
      menu.style.transform = "translateY(-100%)";
    });
  };
  const location = useLocation();
  const navigate = useNavigate();

  async function scrollToUpcomingAndWait(navigateFunc) {
    //this function waits for the page to load before scrolling
    navigateFunc("/");
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 500)
    );
  }
  function scrollToUpcoming() {
    //this function scrolls to the upcoming movies section
    if (location.pathname !== "/") {
      //if the user is not on the homepage, navigate to the homepage and then scroll
      scrollToUpcomingAndWait(navigate).then(() => {
        let upcoming = document.querySelector(".exploreMovies");
        upcoming.scrollIntoView({ behavior: "smooth" });
      });
    } else {
      let upcoming = document.querySelector(".exploreMovies");
      upcoming.scrollIntoView({ behavior: "smooth" });
    }
  }
  let scrollToTrending = () => {
    //this function scrolls to the trending movies section
    if (location.pathname !== "/") {
      //if the user is not on the homepage, navigate to the homepage and then scroll
      scrollToUpcomingAndWait(navigate).then(() => {
        let trending = document.querySelector(".trendingMovies");
        trending.scrollIntoView({ behavior: "smooth" });
      });
    } else {
      let trending = document.querySelector(".trendingMovies");
      trending.scrollIntoView({ behavior: "smooth" });
    }
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
        <div className="menuTop">
          <h3 className="appTitle">RIPDb</h3>
          <div>
            <IconX />
          </div>
        </div>

        <h3 onClick={scrollToTrending}>Trending</h3>
        <h3 onClick={scrollToUpcoming}>Upcoming</h3>
      </div>
    </div>
  );
};
export default NavBar;
