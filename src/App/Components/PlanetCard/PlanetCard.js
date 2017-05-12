import React from 'react'

export const PlanetCard = ({name, terrain, population, climate, residents, handleFav, favorites}) => {
  console.log(favorites)

  let test = (e) => {
    let allData = {
      name: name,
      terrain: terrain,
      population: population,
      climate: climate,
      residents: residents
    }
    handleFav(allData, e)
  }

  return (
    <div className={favorites.includes(name) ? 'card planet favored' : 'card planet'}>
      <h3 className="name-field">{name}</h3>
      <h5 className="terrain-field">Terrain: {terrain}</h5>
      <h5 className="population-field">Population: {population}</h5>
      <h5 className="climate-field">Climate: {climate}</h5>
      <h5 className="residents-field">Residents: {residents}</h5>
      <button className="like-btn"
              onClick={(e)=>{test(e)}}
        >Favorite</button>


    </div>
  )
}
