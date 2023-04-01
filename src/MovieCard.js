import React, { useState } from "react";
import "./MovieCard.css";
import Rating from "./Rating";

let MovieCard = ({ title, poster }) => {
  let [rating, setRating] = useState();
  let [watchlist, setWatchlist] = useState();

  return (
    <div className="movie-card">
      <img src={poster} alt={title} />
      <h1>{title}</h1>
      <Rating />
    </div>
  );
};
export default MovieCard;
