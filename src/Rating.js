import React, { useState, useEffect } from "react";
import star_white from "./assets/star_white.jpg";
import Icon from "./Icon";
import Firebase from "./Firebase";
import "./Rating.css";

export default function Rating(props) {
  let [highlighted, setHighlighted] = useState(-1);
  let showStars = () => {
    let fiveStars = document.querySelector(".mainFiveStars");
    let flexStars = document.querySelector(".flexStars");
    let title = document.querySelector(".rateMovieTitle");
    title.innerHTML = props.title; //setting the title of the movie to be rated
    fiveStars.style.display = "flex"; //displaying the five stars for rating
    flexStars.style.display = "flex"; //displaying the five stars for rating
    fiveStars.addEventListener("click", () => {
      fiveStars.style.display = "none"; //hiding the five stars after a rating is submitted
      setHighlighted(-1);
    });
  };

  let highlightStars = () => {
    let stars = document.querySelector(".mainFiveStars");
    let star = stars.getElementsByTagName("svg");
    for (let i = 0; i < star.length; i++) {
      star[i].addEventListener("mouseover", () => {
        //when the mouse is over a star, change the color of the star to yellow
        setHighlighted(i); //setting the state to the star that is being hovered over
      });
    }
  };
  highlightStars();

  if (highlighted >= -1) {
    //checking if state has been changed, if so, change the color of the stars
    let stars = document.querySelector(".mainFiveStars");
    let star = stars.getElementsByTagName("svg");
    for (let i = 0; i < star.length; i++) {
      if (i <= highlighted) {
        //if the star is less than or equal to the highlighted star, change the color to yellow
        star[i].style.fill = "yellow";
      } else {
        star[i].style.fill = "white";
      }
    }
  }

  return (
    <div key={props.key} className="oneStar" id={props.id} onClick={showStars}>
      <Icon />
    </div> // This is the id of the movie + "oneStar" so that when a rating is submitted, it is submitted to the correct movie
  );
}
