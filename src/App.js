import React, { Component } from 'react'
import Header from './components/Header'

export default class App extends Component {
  render() {
    return (
      <div className='app-container'>
        <Header />
        <h1>Hello, world!</h1>
      </div>
    )
  }
}
