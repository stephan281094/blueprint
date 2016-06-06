import React, { Component } from 'react'

class NewBlueprint extends Component {
  render () {
    return (
      <div className='new-blueprint-modal'>
        <h1 className='title'>Create a new blueprint</h1>
        <span className='title-sub'>
          Please fill in the fields below
        </span>
        <form>
          <input type='text' placeholder='Name of blueprint' />
        </form>
      </div>
    )
  }
}

export default NewBlueprint
