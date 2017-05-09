import React, { Component } from 'react';
import './App.css';
import Main from './Components/Main/Main'
import { OpeningCrawl } from './Components/OpeningCrawl/OpeningCrawl'
import { cleanCrawlData } from './cleanCrawlData'


class App extends Component {
  constructor(){
    super()
    this.state = {
      openingCrawl:{}
    }
  }

  componentDidMount() {
    const openingCrawl = new Request('http://swapi.co/api/films/1/?format=json')

    fetch(openingCrawl)
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
        <OpeningCrawl crawlInfo={this.state.openingCrawl}/>
        <Main />

      </div>
    );
  }
}

export default App;
