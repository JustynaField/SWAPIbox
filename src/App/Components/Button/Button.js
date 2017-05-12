import React from 'react'
import './Button.css'
import PropTypes from 'prop-types'

export const Button = ({buttonType, counter, handleClick}) => {

  const callButton = (e, button) => {
    handleClick(button)
  }


  return(
    <div>
      <button className="select-btn"
        onClick={(e) => {callButton(e, buttonType)}}>{buttonType}<span className="fav-counter">{counter}</span></button>
    </div>
  )
}


Button.propTypes = {
  Button: PropTypes.string,
  counter: PropTypes.number,
  handleClick: PropTypes.func
}
