import React from 'react'
import { PeopleCard } from '../PeopleCard/PeopleCard'
import { PlanetCard } from '../PlanetCard/PlanetCard'
import { VehicleCard } from '../VehicleCard/VehicleCard'
import PropTypes from 'prop-types'


export const CardGrid = ({ dataSet, cardType, handleFavorites, favorites }) => {

  if(cardType === 'people'){
    var cardArray = dataSet.map((card, index) => {
    return <PeopleCard
    key={index}
    name={card.name}
    homeworld={card.homeworld} species={card.species} population={card.population}
    handleFav={handleFavorites}
    favorites={favorites}
    />
    })
  }
  if(cardType === 'vehicles'){
    cardArray = Object.keys(dataSet).map((card, index) => {
      return <VehicleCard
      key={index}
      name={dataSet[card].name} classType={dataSet[card].class} model={dataSet[card].model} class={dataSet[card].class} passengers={dataSet[card].passengers} />
    })
  }
  if(cardType === 'planets'){
    cardArray = Object.keys(dataSet).map((card, index) => {
      if(!dataSet[card].residents.length){
        dataSet[card].residents = 'A lonely world'
      }
      return <PlanetCard
      key={index}
      name={dataSet[card].name} terrain={dataSet[card].terrain} population={dataSet[card].population} climate={dataSet[card].climate} residents={dataSet[card].residents}
      handleFav={handleFavorites}
      favorites={favorites}
      />
    })
  }

  return(
    <section>
      {cardArray}
    </section>
  )
}

CardGrid.propTypes = {
  dataSet: PropTypes.array,
  cardType: PropTypes.string,
  handleFavorites: PropTypes.func,
  favorites: PropTypes.array
}
