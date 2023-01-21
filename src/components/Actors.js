import React from "react";
import { actors } from "../data";

function Actor() {
  const actor = actors.map((actor, index) => {
    <li key={index}>{actor}</li>;
    console.log(index, actor);
  });
  return (
    <div>
      <h1>Actors Page</h1>
    </div>
  );
}

export default Actor;
