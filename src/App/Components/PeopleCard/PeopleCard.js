import React from 'react'
import './PeopleCard.css'
import PropTypes from 'prop-types'

export const PeopleCard = ({name, homeworld, species, population, handleFav, favorites}) => {
  let test = (e) => {
    let allData = {
      name: name,
      homeworld: homeworld,
      species: species,
      population: population
    }
    handleFav(allData, e)
  }

  let favArray = favorites.map(obj => {
    return obj.name
  })

  return (
    <div className={favArray.includes(name) ? 'card people favored' : 'card people'}>
      <h3 className="name-field">{name}</h3>
      <h5 className="homeworld-field">Homeworld: {homeworld}</h5>
      <h5 className="species-field">Species: {species}</h5>
      <h5 className="population-field">Population: {population}</h5>
      <button className="like-btn"
              onClick={(e)=>{test(e)}}
      >Favorite</button>
    </div>
  )
}

PeopleCard.propTypes = {
  name: PropTypes.string,
  homeworld: PropTypes.string,
  species: PropTypes.string,
  population: PropTypes.number,
  handleFav: PropTypes.func,
  favorites: PropTypes.array
}
