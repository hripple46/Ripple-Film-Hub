import React from "react";
import { useLocation } from "react-router-dom";
export default function MovieInfo() {
  let location = useLocation();
  let { title } = location.state;

  return <div>{title}</div>;
}
