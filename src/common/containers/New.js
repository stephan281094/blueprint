import React, { Component } from 'react'

class New extends Component {
  render () {
    return (
      <main className='container'>
        <h1 className='title'>New</h1>
        <span className='title-sub'>Create a new blueprint</span>
        <textarea rows='20'></textarea>
      </main>
    )
  }
}

export default New
