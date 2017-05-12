import React, { Component } from 'react'
import './Main.css'
import { Button } from '../Button/Button'
import { CardGrid } from '../CardGrid/CardGrid'
import { cleanPeopleData } from '../PeopleCard/cleanPeopleData'
import { cleanPlanetsData } from '../PlanetCard/cleanPlanetsData'
import peopleCall from '../PeopleCard/CallingPeople'
import planetsCall from '../PlanetCard/CallingPlanets'
import vehiclesCall from '../VehicleCard/CallingVehicles'
import { cleanVehiclesData } from '../VehicleCard/cleanVehiclesData'
import { DisplayFavorites } from '../DisplayFavorites/DisplayFavorites'


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
      favorites: [],
      showFavorites: false
    }
  }

  componentDidMount() {

    peopleCall()
    .then(e => {cleanPeopleData(e[0])
    .then(call => {this.setState({people: call})
     })
    })

    planetsCall()
      .then(e => { let planets = cleanPlanetsData(e[0])
                  this.setState({planets: planets})
      })

    vehiclesCall()
      .then(e => { let vehicles = cleanVehiclesData(e[0])
                  this.setState({vehicles: vehicles})
      })
    }

  saveFavorites(name, e) {
    let temp = this.state.favorites
    let tempArr = this.state.favorites.map(obj => {
      return obj.name
    })
    let place = tempArr.indexOf(name.name)

    if(place === -1) {
      temp.push(name)
      this.setState({counter: this.state.counter + 1})
    } else {
      temp.splice(place, 1)
      this.setState({favorites: temp})
      this.setState({counter: this.state.counter - 1})
    }
  }

  toggleSelectCards(button) {
    this.setState({
                  selectedButton : button,
                  })
  }

  displayFavorites() {
    this.setState({showFavorites: !this.state.showFavorites})
  }

  displayCards() {
    if(this.state.showFavorites) {
      return (
        <DisplayFavorites favorites={this.state.favorites}/>
      )
    } else {
      return (
        this.renderCardGrid()
      )
    }
  }

  renderCardGrid(){
    var dataSet = this.state.selectedButton
    { if(!this.state.people.length) {
      return (
        <p className="loading-msg">Loading!</p>
      )
    } else {
      return (
        <CardGrid dataSet={this.state[dataSet]}
          cardType={this.state.selectedButton}
          handleFavorites={this.saveFavorites.bind(this)} favorites={this.state.favorites}
        />
      )
    }}
  }

  render() {
      return (
        <div className="main-main loading">
          <header>
            <h1>STAR WARS</h1>
            <button className='fav-btn'
                    onClick={() => this.displayFavorites() }
                    >
                    Favorites
                    <span className="fav-counter">{this.state.counter}</span>
            </button>
          </header>

          <Button buttonType={'people'} handleClick={this.toggleSelectCards.bind(this)}/>
          <Button buttonType={'planets'} handleClick={this.toggleSelectCards.bind(this)}/>
          <Button buttonType={'vehicles'} handleClick={this.toggleSelectCards.bind(this)}/>
          {this.displayCards()}

        </div>
      )
    }
}
