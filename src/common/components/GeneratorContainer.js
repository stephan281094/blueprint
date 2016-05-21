import React, { Component } from 'react'
import Select from './Select'

class GeneratorContainer extends Component {
  render () {
    const { languages, types, handleSubmit, handleChange } = this.props

    return (
      <div className='generator-container'>
        <div className='container'>
          <div className='generator-title'>
            <h1>Let's generate some code!</h1>
          </div>
          <div className='generator-settings'>
            <form onSubmit={handleSubmit}>
              <Select handleChange={handleChange} options={languages} />
              <Select handleChange={handleChange} options={types} />
              <button type='submit'>Continue</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default GeneratorContainer
