import React, { useEffect, useState } from "react";
import axios from 'axios';
import "../index.css"
import LocationCard from "./LocationCard";

export default function LocationsList() {

  // TODO: Add useState to track data from useEffect
    const [location, setLocation] = useState([])
    useEffect(() => {
      //const getLocation = () => {
        axios
        .get('https://rickandmortyapi.com/api/location/')
        .then(response => {
          console.log(response);
          setLocation(response.data.results);
          
        })
        .catch(error => {
          console.log("Server Error", error);
        })
      },[]);
  

  //useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  //}, []);

  return (
    <div className ="characters-list-wrapper">
    <section className="character-list grid-view">
      
        {location.map (locate => (
      <LocationCard location={locate} />
        ))}
    
     
    </section>
    </div>
  );
}
