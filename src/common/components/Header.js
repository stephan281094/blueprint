import React, { Component } from 'react'
import { Link } from 'react-router'

class Header extends Component {
  render () {
    return (
      <header className='app-header'>
        <div className='app-header-left'></div>
        <Link className='app-header-link app-logo' to='/'>Blueprint</Link>
        <div className='app-header-right'>
          <Link className='app-header-link' to='/profile'>You</Link>
        </div>
      </header>
    )
  }
}

export default Header
