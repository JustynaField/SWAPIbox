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
    this.fetchData()
  }

  // componentDidMount(prevState) {
  //   if (prevState.selectedButton !== this.state.selectedButton){
  //     this.fetchData()
  //   }
  // }

  fetchData() {
    fetch(`http://swapi.co/api/${this.state.selectedButton}/`)
      .then(response => response.json())
      .then(data => {this.resetData(data)})
      .catch((err) => console.log(err))
  }

  resetData(data) {
    if(this.state.selectedButton === 'people'){
     return cleanPeopleData(data)
      .then((returnedData) => this.setState({ dataSet: returnedData }))
      .catch(() => {console.log('drats!')})
    }
    if(this.state.selectedButton === 'planets'){
     cleanPlanetsData(data)
       .then((returnedData) => this.setState({ dataSet: returnedData }))
       .catch(() => {console.log('shucks!')})
    }
    if(this.state.selectedButton === 'vehicles'){
      cleanVehiclesData(data)
    //  this.setState({ dataSet: cleanVehiclesData(data) })
      .then((returnedData) => this.setState({dataSet: returnedData }))
      .catch((err) => {console.log('bummer!')})
    }
  }



  toggleSelectCards(button) {
    return this.setState({selectedButton: button})
      .then(this.fetchData())

  }

  render() {
    if(!this.state.dataSet.length){
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
        <CardGrid dataSet={this.state.dataSet} cardType={this.state.selectedButton}/>
      </div>
    )
  }


}
