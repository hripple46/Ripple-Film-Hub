import "./App.css";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import image from "./assets/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg";
import NavBar from "./NavBar";

function App() {
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
          Poster: "https://image.tmdb.org/t/p/w500" + info.poster_path,
        }));
        setMovieTitles(trendingMovieTitles);
      });
  };
  useEffect(() => {
    //using useEffect to call the function only once
    getWeeklyTrendingMovies();
  }, []);

  let displayMovies = (movieTitles) => {
    //function to display the movies
    let movieList = movieTitles.map((movie) => {
      //
      return (
        //returning the movie card component
        <li key={movie.title}>
          <MovieCard title={movie.title} poster={movie.Poster} />
        </li>
      );
    });
    return <ul className="movieList">{movieList}</ul>; //returning the list of movies
  };

  return (
    <div className="App">
      <NavBar />
      {displayMovies(movieTitles)}
    </div>
  );
}

export default App;
