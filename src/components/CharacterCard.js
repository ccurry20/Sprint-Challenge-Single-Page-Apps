import React from "react";
import CharacterList from "./CharacterList";

export default function CharacterCard(props) {
  return <span>
    <h2>{props.character.name}</h2>
  </span>;
}
