import React, { Component } from 'react'

class Header extends Component {
  render () {
    return (
      <header className='app-header'>
        <div className='app-header-left'></div>
        <a className='app-header-link app-logo' href='/'>Blueprint</a>
        <div className='app-header-right'>
          <a className='app-header-link' href='/profile'>You</a>
        </div>
      </header>
    )
  }
}

export default Header
