import React, { Component } from 'react'
import Header from './components/Header'
import Home from './containers/Home'

export default class App extends Component {
  render() {
    return (
      <div className='app-container'>
        <Header />
        <Home />
      </div>
    )
  }
}
