import React, { Component } from 'react'
import './Main.css'
import { Button } from '../Button/Button'
import { CardGrid } from '../CardGrid/CardGrid'
import { cleanPeopleData } from '../../cleanPeopleData'

export default class Main extends Component {
  constructor() {
    super()
    this.state = {
      selectedButton: '',
      cards: [],
      counter: 0
    }
  }

  componentDidMount(){
    const people = 'http://swapi.co/api/people/?format=json'

    fetch(people)
      .then(response => response.json())
      .then(j => {
        this.resetPeople(j)
    })
  }

  resetPeople(people) {
    this.setState({
      cards: cleanPeopleData(people)
    })
  }

  render() {
    return (
      <div className="main-main">
        <header>
          <h1>SWAPI-Box</h1>
        </header>
        <Button buttonType={'favorites'} counter={this.state.counter} />
        <Button buttonType={'people'}/>
        <Button buttonType={'places'}/>
        <Button buttonType={'vehicles'}/>
        <CardGrid dataSet={this.state.cards}/>
      </div>
    )
  }


}
