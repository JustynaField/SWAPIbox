import React, { Component } from 'react';
import './App.css';
import Main from './Components/Main/Main'
import { OpeningCrawl } from './Components/OpeningCrawl/OpeningCrawl'


class App extends Component {
  constructor(){
    super()
    this.state = {
      openingcrawl:[]
    }
  }

  render() {
    return (
      <div className="App">
        <OpeningCrawl />
        <Main />

      </div>
    );
  }
}

export default App;
