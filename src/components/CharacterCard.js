import React from "react";
import CharacterList from "./CharacterList";

export default function CharacterCard(props) {
  return <span div className="character-card">
  
    <h2>{props.character.name}</h2>
    <p>{props.character.species}</p> 
   
  </span>;
}
