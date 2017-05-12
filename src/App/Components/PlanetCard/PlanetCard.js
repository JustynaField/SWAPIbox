import React from 'react'
import PropTypes from 'prop-types'

export const PlanetCard = ({name, terrain, population, climate, residents, handleFav, favorites}) => {

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

  let favArray = favorites.map(obj => {
    return obj.name
  })

  return (
    <div className={favArray.includes(name) ? 'card planet favored' : 'card planet'}>
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

PlanetCard.propTypes = {
  name: PropTypes.string,
  terrain: PropTypes.string,
  climate: PropTypes.string,
  handleFav: PropTypes.func,
  favorites: PropTypes.array
}
