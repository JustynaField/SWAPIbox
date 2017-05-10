import React from 'react'

export const VehicleCard = ({name, model, classType, passengers}) => {
  return (
    <div className="card vehicle">
      <h3>{name}</h3>
      <h5>Model: {model}</h5>
      <h5>Class: {classType}</h5>
      <h5>Passenger Count: {passengers}</h5>
    </div>
  )
}
