import "./App.css";
import TrendingMovies from "./TrendingMovies";
import NavBar from "./NavBar";
import Icon from "./Icon";
import Firebase from "./Firebase";
import UpcomingMovies from "./UpcomingMovies";

function App() {
  return (
    <div className="App">
      <NavBar />
      <TrendingMovies />
      <UpcomingMovies />
      <div className="mainFiveStars">
        <h5 className="rateThis">RATE THIS</h5>
        <h3 className="rateMovieTitle">placeholder</h3>

        <div className="flexStars">
          <Icon />
          <Icon />
          <Icon />
          <Icon />
          <Icon />
        </div>
      </div>
      <Firebase />
    </div>
  );
}

export default App;
