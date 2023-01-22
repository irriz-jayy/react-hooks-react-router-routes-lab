import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, index) => (
        <div className="movie" key={index}>
          {movie.title}
          {movie.time}
          <li>{movie.genres}</li>
        </div>
      ))}
    </div>
  );
}

export default Movies;
