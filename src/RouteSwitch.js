import React from "react";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import App from "./App";
import MovieInfo from "./MovieInfo";

const RouteSwitch = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/movieinfo" element={<MovieInfo />} />
      </Routes>
    </HashRouter>
  );
};
export default RouteSwitch;
