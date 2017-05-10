import React, { Component } from 'react'
import './Main.css'
import { Button } from '../Button/Button'
import { CardGrid } from '../CardGrid/CardGrid'
import { cleanPeopleData } from '../../cleanPeopleData'
import { cleanPlanetsData } from '../../cleanPlanetsData'
import { cleanVehiclesData } from '../../cleanVehiclesData'

export default class Main extends Component {
  constructor() {
    super()
    this.state = {
      selectedButton: 'people',
      dataSet: [],
      counter: 0,
      errorMsg: ''
    }
  }

  componentDidMount() {
    fetch(`http://swapi.co/api/${this.state.selectedButton}/`)
      .then(response => response.json())
      .then(data => {this.resetData(data)})
      .catch((err) => this.setState({errorMsg: 'Did not catch that'}))
  }

  resetData(data) {
    if(this.state.selectedButton === 'people'){
     return cleanPeopleData(data)
      .then((returnedData) => { console.log(returnedData, 'done'); this.setState({ dataSet: returnedData }) })
      .catch(() => {console.log('drats!')})
    }
    if(this.state.selectedButton === 'planets'){
     cleanPlanetsData(data)
       .then((returnedData) => this.setState({ dataSet: returnedData }))
       .catch(() => {console.log('shucks!')})
    }
    if(this.state.selectedButton === 'vehicles'){
     cleanVehiclesData(data)
      .then((returnedData) => this.setState({dataSet: returnedData }))
      .catch((err) => {console.log('bummer!')})
    }
  }

  render() {

    return (
      <div className="main-main">
        <header>
          <h1>SWAPI-Box</h1>
        </header>
        <Button buttonType={'favorites'} counter={this.state.counter} />
        <Button buttonType={'people'}/>
        <Button buttonType={'planets'}/>
        <Button buttonType={'vehicles'}/>
        <CardGrid dataSet={this.state.dataSet} cardType={this.state.selectedButton}/>
      </div>
    )
  }


}
