import React, { Component } from 'react'
import Select from './Select'

class GeneratorContainer extends Component {
  render () {
    const { languages, types } = this.props

    return (
      <div className='generator-container'>
        <div className='container'>
          <div className='generator-title'>
            <h1>Let's generate some code!</h1>
          </div>
          <div className='generator-settings'>
            <Select options={languages} />
            <Select options={types} />
            <button>Continue</button>
          </div>
        </div>
      </div>
    )
  }
}

export default GeneratorContainer
