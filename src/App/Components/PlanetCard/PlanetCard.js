import React from 'react'

export const PlanetCard = ({name, terrain, population, climate, residents, handleFav, favorites}) => {
  console.log(favorites)
  return (
    <div className={favorites.includes(name) ? 'card planet favored' : 'card planet'}>
      <h3 className="name-field">{name}</h3>
      <h5 className="terrain-field">Terrain: {terrain}</h5>
      <h5 className="population-field">Population: {population}</h5>
      <h5 className="climate-field">Climate: {climate}</h5>
      <h5 className="residents-field">Residents: {residents}</h5>
      <button className="like-btn"
              onClick={(e)=>{handleFav(name, e)}}
        >Favorite</button>


    </div>
  )
}
