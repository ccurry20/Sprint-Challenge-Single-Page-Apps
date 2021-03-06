import React, { useEffect, useState } from "react";
import axios from 'axios';
import "../index.css"
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
    const [character, setCharacter] = useState([]);
    useEffect(() => {
      //const getCharacter = () => {
        axios
        .get("https://rickandmortyapi.com/api/character/")
        .then(response => {
          console.log(response);
          setCharacter(response.data.results);
          
        })
        .catch(error => {
          console.log("Server Error", error);
        })
      }, []);
    

  //useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  //}, []);

  return (
    <div className="characters-list-wrapper">
    <section className="character-list grid-view">
      
        {character.map (char => (

       <CharacterCard character={char} />
       
        ))}
       
      
    
    </section>
    </div>
  );
}
