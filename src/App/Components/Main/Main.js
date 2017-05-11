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
      planets: {},
      vehicles: [],
      counter: 0,
      errorMsg: ''
    }
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
    .then(e => {console.log(e[0]);cleanPlanetsData(e[0])
    .then(call => { console.log(call);this.setState({
                  planets: call
                  })
    })
    })
  vehiclesCall()
      .then(e => this.setState({vehicles: e[0]}))



}


    // planetScrubber().then(e => {
    //
    //   cleanPeopleData(e).then()
    // })
  // componentDidUpdate(prevState) {
  //   if (prevState.selectedButton !== this.state.selectedButton){
  //     this.fetchData()
  //   }
  // }
  // componentDidMount(prevState) {
  //   if (prevState.selectedButton !== this.state.selectedButton){
  //     this.fetchData()
  //   }
  // }

  // fetchData() {
  //   fetch(`http://swapi.co/api/${this.state.selectedButton}/`)
  //     .then(response => response.json())
  //     .then(data => {this.resetData(data)})
  //     .catch((err) => console.log(err))
  // }

  // resetData(data) {
  //   if(this.state.selectedButton === 'people'){
  //   cleanPeopleData(data)
  //     .then((returnedData) => this.setState({ dataSet: returnedData }))
  //     .catch(() => {console.log('drats!')})
  //   }
  //   if(this.state.selectedButton === 'planets'){
  //     console.log("hello! cliked")
  //    cleanPlanetsData(data)
  //      .then((returnedData) => this.setState({ dataSet: returnedData }))
  //      .catch(() => {console.log('shucks!')})
  //   }
  //   if(this.state.selectedButton === 'vehicles'){
  //     cleanVehiclesData(data)
  //   //  this.setState({ dataSet: cleanVehiclesData(data) })
  //     .then((returnedData) => this.setState({dataSet: returnedData }))
  //     .catch((err) => {console.log('bummer!')})
  //   }
  // }



  toggleSelectCards(button) {
  }

  render() {
    if(!this.state.people.length){
      return (
        <div className="main-main loading">
          <header>
            <h1>STAR WARS</h1>
          </header>
          <Button buttonType={'favorites'} counter={this.state.counter} onClick={this.toggleSelectCards.bind(this)}/>
          <Button buttonType={'people'} handleClick={this.toggleSelectCards.bind(this)}/>
          <Button buttonType={'planets'} handleClick={this.toggleSelectCards.bind(this)}/>
          <Button buttonType={'vehicles'} handleClick={this.toggleSelectCards.bind(this)}/>
          <div className="loading-msg">Loading!</div>
        </div>
      )
    }
    return (
      <div className="main-main">
        <header>
          <h1>STAR WARS</h1>

        </header>
        <Button buttonType={'favorites'} counter={this.state.counter} onClick={this.toggleSelectCards.bind(this)}/>
        <Button buttonType={'people'} handleClick={this.toggleSelectCards.bind(this)}/>
        <Button buttonType={'planets'} handleClick={this.toggleSelectCards.bind(this)}/>
        <Button buttonType={'vehicles'} handleClick={this.toggleSelectCards.bind(this)}/>
        <CardGrid dataSet={this.state.vehicles} cardType={'vehicles'}/>
      </div>
    )
  }


}
