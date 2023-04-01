import "./App.css";
import TrendingMovies from "./TrendingMovies";
import NavBar from "./NavBar";
import Icon from "./Icon";

function App() {
  return (
    <div className="App">
      <NavBar />
      <TrendingMovies />
      <div className="mainFiveStars">
        <Icon />
        <Icon />
        <Icon />
        <Icon />
        <Icon />
      </div>
    </div>
  );
}

export default App;
