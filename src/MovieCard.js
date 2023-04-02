import React, { useState } from "react";
import "./MovieCard.css";
import Rating from "./Rating";

let MovieCard = ({ title, poster, id }) => {
  let [rating, setRating] = useState();
  let [watchlist, setWatchlist] = useState();

  return (
    <div className="movie-card" id={id}>
      <img src={poster} alt={title} />
      <h1>{title}</h1>
      <Rating id={id + "oneStar"} title={title} />
    </div>
  );
};
export default MovieCard;
