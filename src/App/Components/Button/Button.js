import React from 'react'
import './Button.css'
import PropTypes from 'prop-types'

export const Button = ({buttonType, handleClick}) => {

  const callButton = (e, button) => {
    handleClick(button)
  }

  return(
    <div>
      <button className="select-btn"
        onClick={(e) => {callButton(e, buttonType)}}>{buttonType}</button>
    </div>
  )
}

Button.propTypes = {
  Button: PropTypes.string,
  handleClick: PropTypes.func
}
