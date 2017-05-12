import React from 'react'
import PropTypes from 'prop-types'

export const VehicleCard = ({name, model, classType, passengers}) => {
  return (
    <div className="card vehicle">
      <h3 className="name-field">{name}</h3>
      <h5 className="model-field">Model: {model}</h5>
      <h5 className="class-field">Class: {classType}</h5>
      <h5 className="passenger-field">Passenger Count: {passengers}</h5>
    </div>
  )
}

VehicleCard.propTypes = {
  name: PropTypes.string,
  model: PropTypes.string,
  classType: PropTypes.string,
  passengers: PropTypes.number
}
