import React from "react";
import { directors } from "../data";

function Directors() {
  const listDirectors = directors.map((director, index) => {
    <li key={index}>{director}</li>;
    console.log(director, index);
  });
  return (
    <div>
      <h1>Directors Page</h1>
      <ul>{listDirectors}</ul>
    </div>
  );
}

export default Directors;
