import React from 'react'
// import { PeopleCard } from '../PeopleCard/PeopleCard'
// import { PlanetCard } from '../PlanetCard/PlanetCard'
import { VehicleCard } from '../VehicleCard/VehicleCard'

export const CardGrid = ({ dataSet, selectedButton }) => {
  let cardArray = []
  // if(selectedButton === 'people'){
  //   cardArray = dataSet.map(card => {
  //     <PeopleCard name={card.name} homeworld={card.homeworld}/>
  //   })
  // }
  if(selectedButton === 'vehicle'){
    console.log('im here!')
    cardArray = dataSet.map(card => {
      return <VehicleCard name={card.name} classType={card.class} model={card.model} class={card.class} passengers={card.passengers} />
    })
  }
  // const cardArray = dataSet.results.map(card => {
    console.log({dataSet})
    // return <Card name={card.name}/>
  // })
  return(
    <section>
      {cardArray}
    </section>
  )
}
