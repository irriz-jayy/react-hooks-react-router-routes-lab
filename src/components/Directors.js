import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, index) => (
        <div className="director" key={index}>
          {director.name}
          <li>{director.movies}</li>
        </div>
      ))}
    </div>
  );
}

export default Directors;
