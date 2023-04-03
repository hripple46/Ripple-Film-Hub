import React, { useState, setState } from "react";
import "./MovieInfo.css";

import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";
export default function MovieInfo() {
  let [movieTitle, setMovieTitle] = useState("");
  let [moviePoster, setMoviePoster] = useState("");
  let [year, setYear] = useState("");
  let [runtime, setRuntime] = useState("");
  let [description, setDescription] = useState("");
  let location = useLocation();
  let { title } = location.state;
  function useQuery() {
    //convert the title to a string and replace all spaces with a plus sign
    let titleString = title.toString();
    let titleStringPlus = titleString.replace(/ /g, "+");
    console.log(titleStringPlus);
    fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=485d8a56998fcd2544afe768df960067&query=" +
        titleStringPlus
    )
      .then(function (resposne) {
        return resposne.json();
      })
      .then(function (results) {
        return results.results[0].id;
      })
      .then(function (id) {
        let idInteger = parseInt(id);
        console.log(idInteger);
        return idInteger;
      })
      .then(function (id) {
        return fetch(
          "https://api.themoviedb.org/3/movie/" +
            `${id}` +
            "?api_key=485d8a56998fcd2544afe768df960067"
        );
      })
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        console.log(response);
        setMovieTitle(response.title);
        setMoviePoster(response.poster_path);
        setYear(response.release_date);
        setRuntime(response.runtime);
        setDescription(response.overview);
      });
  }
  useQuery();
  return (
    <div>
      <NavBar />
      <div className="movieInfoBody">
        <h1>{movieTitle}</h1>
        <p>{year + " * " + runtime + " Minutes"}</p>
        <img
          className="moviePoster"
          src={"https://image.tmdb.org/t/p/w500" + moviePoster}
          alt={title}
        />
        <p>{description}</p>
      </div>
    </div>
  );
}
