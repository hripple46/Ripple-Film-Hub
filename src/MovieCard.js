import React, { useState } from "react";

let MovieCard = ({ title, poster }) => {
  let [rating, setRating] = useState();
  let [watchlist, setWatchlist] = useState();

  return (
    <div className="movie-card">
      <img src={poster} alt={title} />
      <h1>{title}</h1>
    </div>
  );
};
export default MovieCard;
