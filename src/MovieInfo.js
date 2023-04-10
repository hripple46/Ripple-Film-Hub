import React, { useState, useEffect } from "react";
import Youtube from "react-youtube";
import "./MovieInfo.css";

import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";
export default function MovieInfo() {
  let [movieTitle, setMovieTitle] = useState("");
  let [movieID, setMovieID] = useState(0);
  let [trailerKey, setTrailerKey] = useState("");
  let [moviePoster, setMoviePoster] = useState("");
  let [year, setYear] = useState("");
  let [runtime, setRuntime] = useState("");
  let [description, setDescription] = useState("");
  let [opts, setOpts] = useState({
    height: "360",
    width: "640",
  });
  let [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    debugger;
    let windowWidth = window.innerWidth;
    setWindowWidth(windowWidth);
    console.log(windowWidth);
    if (windowWidth < 600) {
      setOpts({
        height: "240",
        width: "320",
      });
    }
  }, [windowWidth]); //this will run when the opts state changes

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
        setMovieID(idInteger);
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
      })
      .then(function () {
        return fetch(
          "https://api.themoviedb.org/3/movie/" +
            movieID +
            "/videos?api_key=485d8a56998fcd2544afe768df960067&language=en-US"
        );
      })
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        console.log(response.results);
        let trailer = response.results;
        return trailer;
      })
      .then(function (trailer) {
        if (trailer.length === 0) {
          return null;
        } else {
          let trailerKey = trailer[trailer.length - 1].key;
          return trailerKey;
        }
      })
      .then(function (trailerKey) {
        if (!trailerKey) {
          trailerKey = "dQw4w9WgXcQ";
          setTrailerKey(trailerKey);
          console.log(trailerKey);
        } else {
          setTrailerKey(trailerKey);
          console.log(trailerKey);
        }
      });
  }

  useQuery();
  return (
    <div>
      <NavBar />
      <div className="movieInfoBody">
        <h1>{movieTitle}</h1>
        <p>{year + " * " + runtime + " Minutes"}</p>
        <div className="posterAndTrailer">
          {" "}
          <img
            className="moviePoster"
            src={"https://image.tmdb.org/t/p/w500" + moviePoster}
            alt={title}
          />
          <div className="trailer">
            <Youtube
              videoId={trailerKey}
              containerClassName="youtube-player"
              opts={opts}
            />
          </div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
