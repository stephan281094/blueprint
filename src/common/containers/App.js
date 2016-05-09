import React, { Component } from 'react'
import Header from '../components/Header'
import Home from './Home'
// import '../styles/index.css'

class App extends Component {
  render() {
    return (
      <div className='app-container'>
        <Header />
        <Home />
      </div>
    )
  }
}

export default App
