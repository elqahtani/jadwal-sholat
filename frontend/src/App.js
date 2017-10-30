import React, { Component } from 'react';

import './App.css';

const API_URL = "http://localhost:8000"


export default class App extends Component {
  constructor (props) {
    super (props)
    this.state = {
      data: []
    }
  }

  async componentWillMount() {
    const RESPONSE = await fetch(API_URL)
    const DATA = await RESPONSE.json()
    this.setState ({
      data: DATA
    }) 
  }


  render() {
    return (
      <div className="App">
        <div id = "container" className = "container">
        <p> {JSON.stringify(this.state.data) } </p>
        </div>
      </div>
    );
  }
}
