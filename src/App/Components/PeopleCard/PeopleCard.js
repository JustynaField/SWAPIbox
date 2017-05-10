import React from 'react'

export const PeopleCard = ({name, homeworld, species, population}) => {
  return (
    <div className='card people'>
      <h3>{name}</h3>
      <h5>Homeworld: {homeworld}</h5>
      <h5>Species: {species}</h5>
      <h5>Population: {population}</h5>
      <button>Like</button>
    </div>
  )
}
