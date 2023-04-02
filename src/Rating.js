import React, { useState, useEffect } from "react";
import star_white from "./assets/star_white.jpg";
import Icon from "./Icon";
import "./Rating.css";

export default function Rating(props) {
  let [highlighted, setHighlighted] = useState(-1);
  let showStars = () => {
    let fiveStars = document.querySelector(".mainFiveStars");
    fiveStars.style.display = "flex"; //displaying the five stars for rating
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
        setHighlighted(i);
      });
    }
  };
  highlightStars();

  if (highlighted >= -1) {
    let stars = document.querySelector(".mainFiveStars");
    let star = stars.getElementsByTagName("svg");
    for (let i = 0; i < star.length; i++) {
      if (i <= highlighted) {
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
