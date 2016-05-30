import React, { Component } from 'react'

class NotFound extends Component {
  render () {
    return (
      <main>
        <h1 className='title'>Oops!</h1>
        <span className='title-sub'>
          The page you requested for could not be found.
        </span>
      </main>
    )
  }
}

export default NotFound
