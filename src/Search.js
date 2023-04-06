import React, { useState, useEffect } from "react";

export default function Search() {
  let [search, setSearch] = useState("");
  let [results, setResults] = useState([]);

  async function querySearch() {
    fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=485d8a56998fcd2544afe768df960067&language=en-US&query=" +
        search +
        "&page=1&include_adult=false"
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (results) {
        return results.results;
      })
      .then(function (results) {
        setResults(results);
      });
  }
  let handleChange = (e) => {
    setSearch(e.target.value);
    if (e.target.value === "") {
      setResults([]);
    } else {
      querySearch();
    }
  };

  return (
    <div>
      <input
        className="search"
        type="text"
        placeholder="Search"
        defaultValue=""
        onChange={handleChange}
      />
      <ul>
        {results.map((result) => {
          return <li key={result.id}>{result.title}</li>;
        })}
      </ul>
    </div>
  );
}
