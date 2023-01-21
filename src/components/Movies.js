import React from "react";
import { movies } from "../data";

function Movies() {
  const listMovie = movies.map((movie, index) => {
    <li key={index}>{movie}</li>;
  });
  return (
    <div>
      <h1>Movies Page</h1>
      <ul>{listMovie}</ul>
    </div>
  );
}

export default Movies;
