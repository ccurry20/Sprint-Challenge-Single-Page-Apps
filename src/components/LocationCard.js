import React from "react";

export default function LocationCard(props) {
  return <span div className = "character-card">
    <h2>{props.location.name}</h2>
    <p>{props.location.type}</p>
    <p>{props.location.dimension}</p>
    <p>{props.location.residents}</p>
  </span>;
}
