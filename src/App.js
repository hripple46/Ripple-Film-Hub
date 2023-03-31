import "./App.css";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import image from "./assets/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg";

function App() {
  let movies = [
    {
      title: "The Matrix",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/220px-The_Matrix_Poster.jpg",
    },
    {
      title: "The Matrix Reloaded",
      poster: image,
    },
    {
      title: "The Matrix Revolutions",
      poster: image,
    },
  ];

  let displayMovies = () => {
    let movieList = movies.map((movie) => {
      return (
        <li key={movie.title}>
          <MovieCard title={movie.title} poster={movie.poster} />
        </li>
      );
    });
    return <ul>{movieList}</ul>;
  };

  return <div className="App">{displayMovies()}</div>;
}

export default App;
