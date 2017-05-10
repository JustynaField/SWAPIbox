import React from 'react'
import { PeopleCard } from '../PeopleCard/PeopleCard'
import { PlanetCard } from '../PlanetCard/PlanetCard'
import { VehicleCard } from '../VehicleCard/VehicleCard'

export const CardGrid = ({ dataSet, cardType }) => {

  if(cardType === 'people'){
    var cardArray = dataSet.map(card => {
    return <PeopleCard name={card.name} homeworld={card.homeworld} species={card.species} population={card.population}/>
    })
  }
  if(cardType === 'vehicle'){
    var cardArray = dataSet.map(card => {
      return <VehicleCard name={card.name} classType={card.class} model={card.model} class={card.class} passengers={card.passengers} />
    })
  }
  if(cardType === 'planets'){
    var cardArray = dataSet.map(card => {
      return <PlanetCard name={card.name} terrain={card.terrain} population={card.population} climate={card.climate} residents={card.residents} />
    })
  }

  return(
    <section>
      {cardArray}
    </section>
  )
}
