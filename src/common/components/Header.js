import React, { Component } from 'react'
import { Link } from 'react-router'

class Header extends Component {
  render () {
    return (
      <header className='app-header'>
        <Link className='app-header-logo app-header-link' to='/'>Blueprint</Link>
        <Link className='app-header-menu app-header-link' to='/profile'>You</Link>
      </header>
    )
  }
}

export default Header
