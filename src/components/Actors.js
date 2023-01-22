import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, index) => (
        <div className="actor" key={index}>
          {actor.name}
          <li>{actor.movies}</li>
        </div>
      ))}
    </div>
  );
}

export default Actors;
