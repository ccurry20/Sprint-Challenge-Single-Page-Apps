import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./index.css"

export default function LocationsList() {

  // TODO: Add useState to track data from useEffect
  const LocationList = props => {
    const [location, setLocation] = useState([])
    useEffect(() => {
      const getLocation = () => {
        axios
        .get('https://rickandmortyapi.com/api/location')
        .then(response => {
          setLocation(response.data);
        })
        .catch(error => {
          console.error("Server Error", error);
        })
      },
    []});
  }

  //useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  //}, []);

  return (
    <section className="character-list grid-view">
      <h2>location.map (locate => (
      return <LocationCard imgUrl={locate} />
      </h2>
    </section>
  );
}
