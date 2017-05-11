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

    let temp = this.state.favorites;
    let place = temp.indexOf(name)

    if(place === -1) {
      temp.push(name)
      this.setState({counter: this.state.counter + 1})
    } else {
      temp.splice(place, 1)
      this.setState({favorites: temp})
      this.setState({counter: this.state.counter - 1})
    }



    // if(e.currentTarget.className === 'like-btn favored') {
    //   e.currentTarget.className = 'like-btn'
    // } else {
    //   e.currentTarget.className = 'like-btn favored'
    // }
    console.log(this.state.favorites)
  }


  toggleSelectCards(button) {
    this.setState({
                  selectedButton : button,
                  })
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
                    counter={this.state.counter}>Favorites<span className="fav-counter">{this.state.counter}</span></button>
          </header>
          <Button buttonType={'people'} handleClick={this.toggleSelectCards.bind(this)}/>
          <Button buttonType={'planets'} handleClick={this.toggleSelectCards.bind(this)}/>
          <Button buttonType={'vehicles'} handleClick={this.toggleSelectCards.bind(this)}/>
          {this.renderCardGrid()}

        </div>
      )
    }
}
