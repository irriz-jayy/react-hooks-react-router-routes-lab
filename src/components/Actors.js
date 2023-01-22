import React from "react";
import { actors } from "../data";

function Actors() {
  console.log(actors);
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, index) => (
        <div className="actor" key={index}>
          {actor.name}
          <ul>{actor.movies}</ul>
        </div>
      ))}
    </div>
  );
}

export default Actors;
