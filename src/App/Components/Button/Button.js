import React from 'react'
import './Button.css'

export const Button = ({buttonType, counter}) => {
  return(
    <button>{buttonType} <span className="fav-counter">{counter}</span></button>)
}
