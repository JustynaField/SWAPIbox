import React from 'react'
import { Card } from '../Card/Card'

export const CardGrid = ({ dataSet }) => {
  const cardArray = dataSet.map(card => {
    return <Card name={card.name}/>
  })
  return(
    <section>
      {cardArray}
    </section>
  )
}
