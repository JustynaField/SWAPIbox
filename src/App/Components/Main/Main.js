import React, { Component } from 'react'
import './Main.css'
import { Button } from '../Button/Button'
import { CardGrid } from '../CardGrid/CardGrid'
import { cleanPeopleData } from '../../cleanPeopleData'
import { cleanPlanetsData } from '../../cleanPlanetsData'
import peopleCall from '../PeopleCard/CallingPeople'
import planetsCall from '../PlanetCard/CallingPlanets'
import vehiclesCall from '../VehicleCard/CallingVehicles'
// import peoplestub from '../../stubs/people-stub.js'
// import planetstub from '../../stubs/planet-stub.js'
// import vehiclestub from '../../stubs/vehicle-stub.js'


export default class Main extends Component {
  constructor() {
    super()
    this.state = {
      selectedButton: 'people',
      people: [],
      planets: [],
      vehicles: [],
      counter: 0,
      errorMsg: '',
      favorites: []
    }
    console.log(this.state.favorites)
  }

  componentDidMount() {

    peopleCall()
    .then(e => {cleanPeopleData(e[0])
    .then(call => {this.setState({
                   people: call
                    })
     })
   })
  planetsCall()
    .then(e => { let planets = cleanPlanetsData(e[0])
    this.setState({planets: planets})
  })



  vehiclesCall()
      .then(e => this.setState({vehicles: e[0]}))
}






  saveFavorites(name) {

    let temp = this.state.favorites;
    let place = temp.indexOf(name)

    if(place === -1) {
      temp.push(name)
    } else {
      temp.splice(place, 1)
      this.setState({favorites: temp})
    }
  }

  toggleSelectCards(button) {
    this.setState({
                  selectedButton : button,
                  })
  }

  renderCardGrid(){
    var dataSet = this.state.selectedButton
    console.log(dataSet)
    { if(!this.state.people.length){
      return (
        <div className="loading-msg">Loading!</div>
      )
    } else {
      return (
        <CardGrid dataSet={this.state[dataSet]}
          cardType={this.state.selectedButton}
          handleFavorites={this.saveFavorites.bind(this)}
        />
      )
    }}
  }

  render() {
      return (
        <div className="main-main loading">
          <header>
            <h1>STAR WARS</h1>
          </header>
          <Button buttonType={'favorites'} counter={this.state.counter} onClick={this.toggleSelectCards.bind(this)}/>
          <Button buttonType={'people'} handleClick={this.toggleSelectCards.bind(this)}/>
          <Button buttonType={'planets'} handleClick={this.toggleSelectCards.bind(this)}/>
          <Button buttonType={'vehicles'} handleClick={this.toggleSelectCards.bind(this)}/>
          {this.renderCardGrid()}

        </div>
      )
    }
}
