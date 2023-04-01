import React, { useState, useEffect } from "react";
import star_white from "./assets/star_white.jpg";
import Icon from "./Icon";
import "./Rating.css";

export default function Rating(props) {
  let showStars = () => {
    let fiveStars = document.querySelector(".mainFiveStars");
    fiveStars.style.display = "flex"; //displaying the five stars for rating
    fiveStars.addEventListener("click", () => {
      fiveStars.style.display = "none"; //hiding the five stars after a rating is submitted
      let star = document.querySelector(".mainFiveStars");
      let stars = star.getElementsByTagName("svg");
      for (let i = 0; i < stars.length; i++) {
        stars[i].style.fill = "white";
      }
    });
  };
  let highlight = () => {
    //highlighting the stars when the mouse is over them
    let star = document.querySelector(".mainFiveStars");
    let stars = star.getElementsByTagName("svg");
    console.log(stars);
    for (let i = 0; i < stars.length; i++) {
      stars[i].addEventListener("mouseover", function () {
        for (let j = 0; j < i + 1; j++) {
          stars[j].style.fill = "yellow";
        }
      });
    }
  };
  highlight();

  return (
    <div key={props.key} className="oneStar" id={props.id} onClick={showStars}>
      <Icon />
    </div> // This is the id of the movie + "oneStar" so that when a rating is submitted, it is submitted to the correct movie
  );
}
