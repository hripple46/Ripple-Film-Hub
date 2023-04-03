import React, { useState } from "react";
import "./MovieCard.css";
import Rating from "./Rating";
import { Link } from "react-router-dom";

let MovieCard = ({ title, poster, id }) => {
  let [rating, setRating] = useState();
  let [watchlist, setWatchlist] = useState();

  return (
    <div className="movie-card" id={id}>
      <Link to="/movieinfo" state={{ title: title }} className="movieLink">
        <img className="moviePoster" src={poster} alt={title} />
      </Link>

      <h1>{title}</h1>
      <Rating id={id + "oneStar"} title={title} />
    </div>
  );
};
export default MovieCard;
