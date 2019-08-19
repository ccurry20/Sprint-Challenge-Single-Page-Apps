import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./index.css"
import CharacterCard from "./CharacterCard.js";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
    const [character, setCharacter] = useState([])
    useEffect(() => {
      const getCharacter = () => {
        axios
        .get("https://rickandmortyapi.com/api/character/")
        .then(response => {
          console.log(response);
          setCharacter(response.data.results);
          
        })
        .catch(error => {
          console.error("Server Error", error);
        })
      }
      }, []);
    

  //useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  //}, []);

  return (
    <section className="character-list grid-view">
      {console.log(character)};
      <h2>character.map (char => (
      return <CharacterCard character={char} />;
      </h2>
      })}
    </section>

  );
}
