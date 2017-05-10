import React from 'react'
import './Button.css'

export const Button = ({buttonType, counter, handleClick}) => {

  const callButton = (e, button) => {
    handleClick(button)
  }


  return(
    <button onClick={(e) => {callButton(e, buttonType)}}>{buttonType}<span className="fav-counter">{counter}</span></button>)
}
