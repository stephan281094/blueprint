import React, { Component } from 'react'
import Header from '../components/Header'
if (typeof window !== 'undefined') require('../styles/index.css')

class App extends Component {
  render () {
    return (
      <div className='app-container'>
        <Header />
        {this.props.children}
      </div>
    )
  }
}

export default App
