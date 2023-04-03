import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import MovieInfo from "./MovieInfo";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/movieinfo" element={<MovieInfo />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RouteSwitch;
