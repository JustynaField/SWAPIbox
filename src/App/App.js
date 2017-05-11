import React, { Component } from 'react';
import './App.css';
import Main from './Components/Main/Main'
import { OpeningCrawl } from './Components/OpeningCrawl/OpeningCrawl'
import { cleanCrawlData } from './Components/OpeningCrawl/cleanCrawlData'


class App extends Component {
  constructor(){
    super()
    this.state = {
      openingCrawl:{}
    }
  }

  componentDidMount() {

    fetch('http://swapi.co/api/films/1/?format=json')
      .then(response => response.json())
      .then(j => {
        this.resetCrawl(j)
      })
    }

    resetCrawl(crawlData) {
      this.setState({
      openingCrawl: cleanCrawlData(crawlData)
    })
  }

  render() {
    return (
      <div className="App">
        <OpeningCrawl  crawlInfo={this.state.openingCrawl}/>
        <Main />
      </div>
    );
  }
}

export default App;
