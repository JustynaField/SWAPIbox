import React from 'react'
import './PeopleCard.css'

export const PeopleCard = ({name, homeworld, species, population, handleFav}) => {
  console.log(handleFav)
  return (
    <div className='card people'>
      <h3>{name}</h3>
      <h5>Homeworld: {homeworld}</h5>
      <h5>Species: {species}</h5>
      <h5>Population: {population}</h5>
      <button className="like-btn"
              onClick={()=>{handleFav(name)}}
      >Favorite</button>
    </div>
  )

}
