import "./App.css";
import { useEffect, useState } from "react";
import TrendingMovies from "./TrendingMovies";
import image from "./assets/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <TrendingMovies />
    </div>
  );
}

export default App;
