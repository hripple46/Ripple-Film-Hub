import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

function TrendingMovies() {
  let [movieTitles, setMovieTitles] = useState([]);

  let getWeeklyTrendingMovies = () => {
    console.log("function called");
    fetch(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=485d8a56998fcd2544afe768df960067",
      { mode: "cors" }
    )
      .then((response) => {
        return response.json();
      })
      .then((results) => {
        return results.results;
      })
      .then((info) => {
        console.log(info);
        let trendingMovieTitles = info.map((info) => ({
          title: info.title,
          Poster: "https://image.tmdb.org/t/p/w500" + info.poster_path, //adding the base url to the poster path
        }));
        setMovieTitles(trendingMovieTitles);
      });
  };

  useEffect(() => {
    getWeeklyTrendingMovies();
  }, []);

  let displayMovies = (movieTitles) => {
    let movieList = movieTitles.map((movie) => {
      return (
        <li key={movie.title}>
          <MovieCard title={movie.title} poster={movie.Poster} />
        </li>
      );
    });
    return <ul className="movieList">{movieList}</ul>;
  };

  return <div>{displayMovies(movieTitles)}</div>;
}

export default TrendingMovies;
