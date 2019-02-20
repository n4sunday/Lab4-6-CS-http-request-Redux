import React, { Component } from 'react';
import Github from './github/index'
import Weather from './weather/index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Github/>
        <Weather/>
      </div>
    )
  }
}


export default App;
