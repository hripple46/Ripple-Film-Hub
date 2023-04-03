import React from "react";
import { useLocation } from "react-router-dom";
export default function MovieInfo() {
  let location = useLocation();
  let { title } = location.state;
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
    });
  return;
}
