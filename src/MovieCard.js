import React, { useState } from "react";
import "./MovieCard.css";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import Firebase from "./Firebase";

let MovieCard = ({ title, poster, id }) => {
  let [rating, setRating] = useState();
  let [watchlist, setWatchlist] = useState();

  return (
    <div className="movie-card" id={id}>
      <Link to="/movieinfo" state={{ title: title }} className="movieLink">
        <img className="moviePoster" src={poster} alt={title} />
      </Link>
      <div className="movieDetailsContainer">
        <h1>{title}</h1>
        <div className="movieDetails">
          <Firebase title={title} />
          <Rating id={id + "oneStar"} title={title} />
        </div>
      </div>
    </div>
  );
};
export default MovieCard;
