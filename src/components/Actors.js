import React from "react";
import { actors } from "../data";

function Actors() {
  console.log(actors);
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, index) => (
        <div className="actor" key={index}>
          <p>{actor.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Actors;
