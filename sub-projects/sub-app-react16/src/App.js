import React, { Component } from 'react';
import './App.css';
import {Clock} from "./Clock";
import './styles/bootstrap/bootstrap.min.css';

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <Clock/>
      </div>
    );
  }
}

export default App;
