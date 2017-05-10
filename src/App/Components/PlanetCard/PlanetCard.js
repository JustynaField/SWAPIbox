import React from 'react'

export const PlanetCard = ({props}) => {
  return (
    <div className="card planet">
      <h3>{name}</h3>
      <h5>Terrain: {terrain}</h5>
      <h5>Population: {population}</h5>
      <h5>Climate: {climate}</h5>
      <h5>Residents: {residents}</h5>
      <button>Like</button>
    </div>
  )
}
