import React from "react";
import { actors } from "../data";

function Actors() {
  const listActor = actors.map((actor, index) => {
    <li key={index}>{actor}</li>;
    console.log(index, actor);
  });
  return (
    <div>
      <h1>Actors Page</h1>
      <ul>test</ul>
    </div>
  );
}

export default Actors;
