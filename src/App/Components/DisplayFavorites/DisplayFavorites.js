import React from 'react'

export const DisplayFavorites = ({favorites}) => {
  if (favorites) {
    const cards = favorites.map((card, index) => {
      if(card.species) {
        return (
          <div className={favorites.includes(name) ? 'card people favored' : 'card people'}>
            <h3 className="name-field">{card.name}</h3>
            <h5 className="homeworld-field">Homeworld: {card.homeworld}</h5>
            <h5 className="species-field">Species: {card.species}</h5>
            <h5 className="population-field">Population: {card.population}</h5>
          </div>
        )
      } else if (card.residents) {
        return (
          <div className={favorites.includes(name) ? 'card planet favored' : 'card planet'}>
            <h3 className="name-field">{card.name}</h3>
            <h5 className="terrain-field">Terrain: {card.terrain}</h5>
            <h5 className="population-field">Population: {card.population}</h5>
            <h5 className="climate-field">Climate: {card.climate}</h5>
            <h5 className="residents-field">Residents: {card.residents}</h5>
          </div>

        )
      }

    })
    return (

      <div>
      {cards}
      </div>
    )
  }

}
