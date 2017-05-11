import React from 'react'

export const PlanetCard = ({name, terrain, population, climate, residents, handleFav}) => {
  return (
    <div className="card planet">
      <h3>{name}</h3>
      <h5>Terrain: {terrain}</h5>
      <h5>Population: {population}</h5>
      <h5>Climate: {climate}</h5>
      <h5>Residents: {residents}</h5>
      <button className="like-btn"
              onClick={()=>{handleFav(name)}}
        >Favorite</button>
    </div>
  )
}
