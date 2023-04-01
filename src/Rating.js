import React, { useState, useEffect } from "react";
import star_white from "./assets/star_white.jpg";
import Icon from "./Icon";
import "./Rating.css";

export default function Rating() {
  let showStars = () => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <li key={i}>
          <Icon />
        </li>
      );
    }
    return stars;
  };
  return <ul className="fiveStars">{showStars()}</ul>;
}
