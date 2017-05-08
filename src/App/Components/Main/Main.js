import React, { Component } from 'react'
import './Main.css'
import { Button } from '../Button/Button'
import { CardGrid } from '../CardGrid/CardGrid'

export default class Main extends Component {
  constructor() {
    super()
    this.state = {
      selectedButton: '',
      cards: [],
      favorites: []
    }
  }

  render() {
    return (
      <div className="main-main">
        <header>
          <h1>SWAPI-Box</h1>
        </header>
        <Button buttonType={'people'}/>
        <Button buttonType={'places'}/>
        <Button buttonType={'vehicles'}/>
        <CardGrid />
      </div>
    )
  }


}
