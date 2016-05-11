import React, { Component } from 'react'
import Select from './Select'

class GeneratorContainer extends Component {
  render () {
    const { languages, types } = this.props

    return (
      <div className='generator-container'>
        <h1>Let's generate some code!</h1>
        <Select options={languages} />
        <Select options={types} />
        <button type='submit'>Continue</button>
      </div>
    )
  }
}

export default GeneratorContainer
